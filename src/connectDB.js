// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCZhMZRqPDJCmfzKUAOHCP30E_rZ7UGvAI",
	authDomain: "todo-list-42a92.firebaseapp.com",
	projectId: "todo-list-42a92",
	storageBucket: "todo-list-42a92.appspot.com",
	messagingSenderId: "726413032467",
	appId: "1:726413032467:web:e55c198f71fbe1121b13e6"
};

// Initialize Firebase
const connectFirebase = initializeApp(firebaseConfig);
const db = getFirestore(connectFirebase)
export default db