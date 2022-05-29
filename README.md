## Proxy : The Face-Recognition Attendence System
<img align="center" src="./favicon.svg" width="320" title="Proxy : The Attendence System">

Proxy is a attendence marking tool with the help of Face-Recognition. It Detects faces and recognize them and on the basis of given data it marks their attendence. It is easily Integratable with any web-based app.

* Supported by Tensorflow **<a href="https://github.com/justadudewhohacks/face-api.js/">Face-Api</a>**.
* Marks attendence of Students/Employees by recognizing their face.
* Data is stored on Firebase.
* manage Students/Employee
* High Availability

## Installation

* **Method 1** : git clone Command : ```bash https://github.com/saurabh100ni/Proxy``` 

* **Method 2** : Download and use <a>*.bat*</a> file and execute it.

## Used Techonolgies

* HTML
* BootStrap
* veit js
* vanilla js
* [Tensorflow Face-Api](https://github.com/vladmandic/face-api)
* Google Firebase 
* Azure Qna Services

## How it Works

1. **FAQ** : there is an FAQ section which is basically an bot based on `Azure Bot services` which retrieves data from `Azure Knowledge base` from `Azure Qna Services`
2. **Login and Signup** : `firebase authentication services` are used to authenticate user for login or sign up.
3. **Registeration of Employees/Students** : for registration and storing the data of user `firestore Database` is used and `firebase Storage` is used
4. **Face-Recognition** : to detect and recognize faces `Tensorflow Face-Api` is used . the data of person is retrieved from the `firestore Database` and the attendence is updated on `firestore Database` for each day.

## Features

* High Availability
* Easy Integration
* Face-Recognition
* Realtime Database
* Easy UI



