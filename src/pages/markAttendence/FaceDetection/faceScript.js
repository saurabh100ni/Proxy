import { app, db, storage } from "../../../../lib/firebase";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";

// targeting video element
const video = document.getElementById("videoInput");
const videoContainer = document.getElementById("videoContainer");

// user data
let users = await getDocs(collection(db, "employee"));
let list = [];
let employeeIndex = 0;
window.onload = fetchData();

Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};

// For time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};
// function to fetch the data from the database
function fetchData() {
  users.forEach((user) => {
    list.push({ id: user.id, ...user.data() });
  });
}

function updateEmployeeIndex(index) {
  employeeIndex = index;
}

async function updateAttendence(id, i) {
  const idRef = doc(db, "employee", id);
  await updateDoc(idRef, {
    presence: arrayUnion({
      date: new Date().today(),
      attendence: true,
    }),
  });
}

// array to add the label names to the database
let labelList = [];
// array to add the image to the database
let image = [];
let id = [];
// function to add the data to the database
list.forEach((user) => {
  labelList.push(user.details.email);
  image.push(user.details.image1);
  id.push(user.id);
});

// making promises to load the models
Promise.all([
  // // calling the face detection model for viet js
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  // calling the face landmark model
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  // calling the face descriptor model
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  // calling the face descriptor model
  faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
]).then(start);

// stream video to the video element
function start() {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err)
  );

  // callign the function to recognize faces
  recognizeFaces();
}

// async function to recognize faces
async function recognizeFaces() {
  // load the labeled images
  const labeledDescriptors = await loadLabeledImages();
  // create a face matcher
  const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.7);
  // set the video to play
  const canvas = faceapi.createCanvasFromMedia(video);

  // append the canvas to the videoContainer
  videoContainer.append(canvas);

  // add className to canvas
  canvas.className = "d-flex justify-content-center position-absolute";

  // set the canvas to the video size
  const displaySize = { width: video.offsetWidth, height: video.offsetHeight };

  // set the canvas to the display size
  faceapi.matchDimensions(canvas, displaySize);

  // set the interval to call the function
  setInterval(async () => {
    // get the current frame from the video
    const detections = await faceapi
      .detectAllFaces(video)
      .withFaceLandmarks()
      .withFaceDescriptors();

    // get the current frame from the video
    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    // get the current frame from the video
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    const results = resizedDetections.map((d) => {
      return faceMatcher.findBestMatch(d.descriptor);
    });

    // print the detected face name
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: result.toString(),
      });
      let index = labelList.indexOf(result._label);

      // if there is arr then update the attendence
      if (index != -1) {
        if (result._label != "unknown") {
          updateAttendence(list[index].id);
        }
      }
      drawBox.draw(canvas);
    });

    // draw the results
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: result.toString(),
      });
      drawBox.draw(canvas);
    });
  }, 100);
}

// function to load the labeled images
function loadLabeledImages() {
  // Load the folder names in /labeled_images

  // create an array to add the labeled images
  const labelNames = labelList;

  // create an array to add the labeled images
  return Promise.all(
    labelNames.map(async (label, index) => {
      const descriptions = [];
      const img = await faceapi.fetchImage(image[index]);
      updateEmployeeIndex(index);
      const detections = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceDescriptor();
      descriptions.push(detections.descriptor);
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}
