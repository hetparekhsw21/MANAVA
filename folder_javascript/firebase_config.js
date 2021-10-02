
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCpej3Br7aYd8v7jBW8iec9jFDd3VdSVwE",
    authDomain: "manava-1cdfa.firebaseapp.com",
    databaseURL: "https://manava-1cdfa-default-rtdb.firebaseio.com",
    projectId: "manava-1cdfa",
    storageBucket: "manava-1cdfa.appspot.com",
    messagingSenderId: "132743588059",
    appId: "1:132743588059:web:5fdcd15a68838bbd5f44fe",
    measurementId: "G-Q1Y0VE1BR9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
