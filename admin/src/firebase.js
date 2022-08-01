// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQkUo7Du8-GOfgquIsE32yKhpcYfxqaCI",
    authDomain: "react-eshop-mern.firebaseapp.com",
    projectId: "react-eshop-mern",
    storageBucket: "react-eshop-mern.appspot.com",
    messagingSenderId: "1012246456326",
    appId: "1:1012246456326:web:0183d9797f7dce83587b87",
    measurementId: "G-TG1WBLTTFL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
