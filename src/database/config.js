import firebase from "firebase/app";
import "firebase/database"

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDDpARafWvZt9qn6-rg16V_Y9RSvkjoa_Y",
    authDomain: "photowall-f6b1e.firebaseapp.com",
    databaseURL: "https://photowall-f6b1e.firebaseio.com",
    projectId: "photowall-f6b1e",
    storageBucket: "photowall-f6b1e.appspot.com",
    messagingSenderId: "729419160863",
    appId: "1:729419160863:web:6b67a44c820f36d610a42a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();


export {database}
