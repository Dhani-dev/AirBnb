  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js"
  // https://firebase.google.com/docs/web/setup#available-libraries

  

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAUm7Ts6Q9tL25WYjkWr7FNAXqbGTlhPuE",
    authDomain: "air-bnb---app.firebaseapp.com",
    projectId: "air-bnb---app",
    storageBucket: "air-bnb---app.firebasestorage.app",
    messagingSenderId: "600324969963",
    appId: "1:600324969963:web:bf03adbe4895611f9df5ae"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)