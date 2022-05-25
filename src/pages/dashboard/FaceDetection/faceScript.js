// targeting video element
const video = document.getElementById("videoInput");
const videoContainer = document.getElementById("videoContainer");

// // making promises to load the models
// Promise.all([
//   // calling the face detection model
//   faceapi.nets.tinyFaceDetector.loadFromUri("./FaceDetection/models"),
//   // calling the face landmark model
//   faceapi.nets.faceRecognitionNet.loadFromUri("./FaceDetection/models/"),
//   // calling the face descriptor model
//   faceapi.nets.faceLandmark68Net.loadFromUri("./FaceDetection/models/"),
//   // calling the face descriptor model
//   faceapi.nets.ssdMobilenetv1.loadFromUri("./FaceDetection/models/"),
// ]).then(start);

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
      console.log(result.toString());
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

  const labels = ["saurabh soni", "Tanish Gupta", "yash sharma"];
  return Promise.all(
    labels.map(async (label) => {
      const descriptions = [];
      for (let i = 1; i <= 2; i++) {
        const img = await faceapi.fetchImage(
          `../FaceDetection//labeled_images/${label}/${i}.jpg`
        );
        const detections = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        descriptions.push(detections.descriptor);
      }
      return new faceapi.LabeledFaceDescriptors(label, descriptions);
    })
  );
}
