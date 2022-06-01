## Proxy : The Face-Recognition Attendence System
<img align="center" src="https://github.com/saurabh100ni/Proxy/blob/main/src/assets/favicon.svg" width="320" title="Proxy : The Attendence System">

Proxy is a attendence marking tool with the help of Face-Recognition. It Detects faces and recognize them and on the basis of given data it marks their attendence. It is easily Integratable with any web-based app.

* Supported by Tensorflow **<a href="https://github.com/justadudewhohacks/face-api.js/">Face-Api</a>**.
* Marks attendence of Students/Employees by recognizing their face.
* Data is stored on Firebase.
* manage Students/Employee
* High Availability

## Installation

* **Method 1** : 
                 git clone Command : ```git clone https://github.com/saurabh100ni/Proxy ```

                 * run "initialize.bat"
                 
                 * run "run.bat"
                 
                 * now your app is hosted on local server with givem port : localhost:<port>
                

* **Method 2** : Download and use [*install.bat*](https://drive.google.com/file/d/1vykZUs2ur2_kcO57H1D5Dk7ZBzcWQbe2/view?usp=sharing) file and execute it.
                 
                 * run *initialize.bat*
                 
                 * run *run.bat*
                 
                 * now your app is hosted on local server with givem port : localhost:<port>

## Used Techonolgies

* HTML
* BootStrap
* vite
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

## Important Configuration

1. update line 16 to 23 with your firebase credentials in [/lib/firebase.js](https://github.com/saurabh100ni/Proxy/blob/main/lib/firebase.js)
    <img src="[https://github.com/saurabh100ni/Proxy/blob/main/src/assets/favicon.svg](https://lh3.googleusercontent.com/OrgWsMIkHHhJhVDDnhsApwPT0JwTgtHCpTYm3fL9TZzLTDXIVzpr1Q3pMyx71vgRGODGOTJSs9DD_FxOduFjkagYrPdIOtkHudyEcI7hRG1u3Ai2cJoXsfk7DvIf9cfLGIRoUmk-Gsy8VGDxOdZCIvCKbDuf7_R2TYiTez7311a70uveqyO9HxUbe1_iYUFT1Ok_scLaSvsTKtveUF93ISwhd2_wG3-pgQbitYLXNBg3BlMBWX-Bh4D4JLiReVPZYkY_QXloNNwISB_XLC2INFRP3T4_Xg8-AS0dW48gBMuDWTed5JukUJoHAdiEgUZUIr9KLHdciL2KO9BkRwjtdhLQ_DtC7t3vkZ44JsBVattSvvEI09oDfLKKSyXBJ6ZtycaUbv1HI0efHkq0oL3LmbvEXhftGt5GbfJoa5R5nIsk2m90dX9K_yjQ96RboUlGPc2GAXCzQejRyjlBqcbS1My6P7hZ35ul1F1eJS9J11Uxv5xAr9KVhBrfirZ3iRImOXY2hQ0BVkLwdrgAX9KBDedle1WZKrtxNStArIWfCh2PhTLrU7RX98fYwSixWW7mI9ieYasqAsLzuPFr3NJyjuX32BFnB-rTstiwQYpai-hB38f-SrwfoHdmgaP8pAWidx6UJiZxR0-_pnK41HELlZzJ-Gx2Y6uoRJ6j9KiOz1p_HCqpHeMKa5D4XK_-0jMCOmeMQFpjRwuZAOCGuI9SADgu6AUuTXy5gAanUqgx1LE0WyIeVgpy0dxpjkunTMNuzHlsT_xxd8fywaXGpvU8huEwIPDf9lZ0IQ=w513-h207-no?authuser=0)" width="320" title="Firebase credentials">


2. update line 203 to 205 in [index.html](https://github.com/saurabh100ni/Proxy/blob/main/index.html) with youre Azure Qna services chat-bot credentials
    <img src="[https://github.com/saurabh100ni/Proxy/blob/main/src/assets/favicon.svg](https://lh3.googleusercontent.com/cj91rZcZ07wYLeXmKMvU-D4Tv5ssyxCG37FhtZC9hBdem2EAQi3WGE7unX3wfqDiPM30qHB4FJyqCjGJvK_tRoXTO9PLfm56dDf1KYawEXU8g9kGbr8KJ3lAfSdmPHZcF2xlS5RWXGb6bLN2CYRimODLKduoa-OozSWEyPpVqPJJ6wll7UvJ639kmV6WANdhjWcRPI6XiWXRuMR-fxdy0rz80aO8ickwgG7RkgTnnywujfCQfRcN_pHO5OJiUqdQyw64EVliht1lEmv3cIUFzRn6x7hef5ZNihK2E7_s8AzPB41axkaqI9LIkEOIfd7OiQ7gvPJDIy1wsNFiKRkO90bgScsgiWu_OebOENY1ZzAciu6xNeO00i_RTkXIrGpCiSKmoCHM1CRpylUvTGGNQ1WiqLQnzZvpOUI0_viKrb38mGcEW-WxNqfnH2vLc1fAhckthcRFe1zdfZGmluJmBk3U-qjrAx-bn-Ju6ijKl29BvfiFPosTVpYAS30jxcajelJcqVRmVooI7Sc8sKc_ie0SLnsb-lv17SKJSmUF18csAJ9zOGmWkqEBgaZ-w9bwrzGRPUDMAyXt5fAR18EDa-QNld_UArxfF3K-DN8LL9LPABDCTGuCYD9TFYB5YqACYAhfdnGtzmyB4ZvaUzvhNCgONW2vLdHdaR-KgqrxI1QSjPAmiKe0t7JVMlU_lxqsUyhhhasc07vQy3UxQlQv17inZ__SdLH36KdSukLfLJqcC9l7OPcXTALy9fCPhNto0Dnlz6Hb14M0d1X8niouZb6ZuBBbWdiTzQ=w644-h64-no?authuser=0)" width="320" title="Proxy : The Attendence System">
    
3. update your firestore database rules as given below
  ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if true;
        }
      }
    }
  ```

4. update your firebase storage rules as given below
  ```
    rules_version = '2';
    service firebase.storage {
      match /b/{bucket}/o {
        match /{allPaths=**} {
          allow read, write: if true;
        }
      }
    }
  
  ```
  

## Contact

feel free to contact me for anything related to this

* Linkedin : https://www.linkedin.com/in/saurabh100ni/

* Email : saurabhsonig12@gmail.com

