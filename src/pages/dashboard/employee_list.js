import { app, db, storage, auth } from "../../../lib/firebase";
import { addDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

let users = await getDocs(collection(db, "employee"));
let list = [];
fetchData();

function fetchData() {
  loader(list);
  users.forEach((user) => {
    list.push({ id: user.id, ...user.data() });
  });
  addList(list);
}

//get date from the firebase
function getDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function loader(list) {
  if (!list) {
    let rows = document.getElementById("table");
    let tr = "";
    tr = `<div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>`;
    rows.innerHTML += tr;
  } else {
    let rows = document.getElementById("rows");
    rows.innerHTML = "";
  }
}

//add list data dynamically to the employee table
function addList(list) {
  let rows = document.getElementById("rows");
  let tr = "";
  let count = 1;
  loader(list);
  for (let employee of list) {
    if (count <= 10) {
      tr += `<tr>
         <th scope="row">${count++}</th>
         <td>${employee.details.name}</td>
         <td>${employee.details.email}</td>
          <td>${getDate()}</td>
          <td>${
            employee.presence[employee.presence.length - 1].attendence
              ? "present"
              : "absent"
          }</td>
     </tr>`;
    }
  }

  rows.innerHTML = tr;
  let previous = document.getElementById("previous");
  let next = document.getElementById("next");
  previous.addEventListener("click", () => {
    if (count > 10) {
      count -= 10;
      addList(list);
    }

  });
  next.addEventListener("click", () => {
    if (count <= list.length) {
      count += 10;
      addList(list);
    }
  });
}

//search employee from email from table
const search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  let value = e.target.value.toLowerCase();
  let rows = document.getElementById("rows");
  let tr = "";
  let count = 1;

  for (let employee of list) {
    if (employee.details.email.toLowerCase().includes(value)) {
      tr += `<tr>
         <th scope="row">${count++}</th>
         <td>${employee.details.name}</td>
         <td>${employee.details.email}</td>
          <td>${getDate()}</td>
          <td>${
            employee.presence[employee.presence.length - 1].attendence
              ? "present"
              : "absent"
          }</td>
     </tr>`;
    }
  }

  rows.innerHTML = tr;
});
