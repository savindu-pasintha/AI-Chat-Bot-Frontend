// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc6FqrgZ5R5WPTiKxCtZaeGrx_URN_Zvc",
  authDomain: "chat-bot-database-6ddca.firebaseapp.com",
  projectId: "chat-bot-database-6ddca",
  storageBucket: "chat-bot-database-6ddca.appspot.com",
  messagingSenderId: "995049480276",
  appId: "1:995049480276:web:153a28ad1de6f7c8d38dc1",
  measurementId: "G-XYKZ4KDEHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);