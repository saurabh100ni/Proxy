import { app, db } from "./lib/firebase";
import { getAuth } from "firebase/auth";
// console.log("app: ", app);
// console.log("db: ", db);

console.log(getAuth());
