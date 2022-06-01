// importing required packages
import { app, db, storage } from "../../../lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { uploadBytes, ref, listAll, getDownloadURL } from "firebase/storage";

// function to get image from camera
let storageRef = ref(storage, `employees/`);

listAll(storageRef)
  .then((res) => {
    console.log(res);
    res.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        // console.log(url);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

// display name of current user
const form = document.getElementById("form");
const name = document.getElementById("nameOfEmployee");
const email = document.getElementById("employeeEmail");
const image1 = document.getElementById("employeeImage1");

let user = {};
let employee = true;
let emplyeeHitOnCamera = "saurabh";

let imageInfo = {
  image1: {},
};

// creating custom date prototype
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

//getdata
const users = await getDocs(collection(db, "employee"));
let list = [];
users.forEach((user) => {
  list.push({ id: user.id, ...user.data() });
});

let data = {
  presence: [
    {
      date: "",
      attendence: "",
    },
  ],
  details: {
    name: null,
    email: null,
    image1: null,
  },
};

// calling getUser to check is user available or not
getUser();

const removeUser = document.getElementById("logout");
removeUser.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  window.location.href = "../loginAndSignup/loginOrSignup.html";
});

function getUser() {
  user = JSON.parse(localStorage.getItem("user"));
}

// navigate if there is no user
if (!user) {
  window.location.href = "./loginOrSignup.html";
}

// form submit

function addImageUrlInData(url) {
  data.details.image1 = url;
  console.log("image link --> ", data.details.image1);
  if ((data.details.image1 !== null) && (data.details.name !== null) && (data.details.email !== null)) {
    handleAdd();
  } else {
    console.log("handle didnt work");
  }
}

async function handleImage() {
  if(data.details.name !== null && data.details.email !== null){
  let storageRef = ref(
    storage,
    `employees/${data.details.name}/${imageInfo.image1.name}`
  );
  let imageRef = ref(storage, `employees/${data.details.name}`);
  console.log(ref(storage, `employees/`));
  if (imageInfo.image1) {
    let image = imageInfo.image1;
    uploadBytes(storageRef, image).then((snapshot) => {
      listAll(imageRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            addImageUrlInData(url);
          });
        });
      });
    });
  } else {
    return;
  }}
  else{
    alert("Please fill all the fields");
  }
}

//add data
async function handleAdd() {
  // check if data.details.name is not null and data.details.email is not null and data.details.image1 is not null
  if (data.details.name !== "" && data.details.email !== "" && data.details.image1 !== "") {
    const res = await addDoc(collection(db, "employee"), {
      ...data,
    });
  }
  else {
    alert("Please fill all the fields");
    console.log("handleAdd didnt work");
  }
}

//get data

// add event listeners and save data into data object
image1.addEventListener("change", (e) => {
  let file;
  file = e.target.files[0];
  imageInfo.image1 = file;
});

name.addEventListener("change", (e) => {
  e.preventDefault();
  data.details.name = name.value;
});

email.addEventListener("change", (e) => {
  e.preventDefault();
  data.details.email = email.value;
});

form.addEventListener("submit", (e) => {

  e.preventDefault();

  // empty fields after submit
  name.value = "";
  email.value = "";
  image1.value = "";
  console.log("data in submit: ", data);
  handleImage(e);

  // make alert
  alert(`employee ${data.details.name} saved`);
});

// loader function before camera loads and remove loader after camera load and show camera
function loader() {
  let loader = document.getElementById("loader");
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
}

// update status
let status = document.getElementById("status");
