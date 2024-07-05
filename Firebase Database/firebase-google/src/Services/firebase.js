
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5YyuRbqHeyH8BUai_QMtpf8oga_LUGA",
  authDomain: "auth-5458e.firebaseapp.com",
  projectId: "auth-5458e",
  storageBucket: "auth-5458e.appspot.com",
  messagingSenderId: "996525898067",
  appId: "1:996525898067:web:fc1ea82295caa4308f49a6",
  measurementId: "G-5F6Z9B5N42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
 export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);