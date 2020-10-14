import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBIX9h9f1HdEQ-wVG0FOqv-S3w6UnDhRaw",
    authDomain: "dashboard-4c00a.firebaseapp.com",
    databaseURL: "https://dashboard-4c00a.firebaseio.com",
    projectId: "dashboard-4c00a",
    storageBucket: "dashboard-4c00a.appspot.com",
    messagingSenderId: "790912959261",
    appId: "1:790912959261:web:5ba9fdcc5e187db06997f4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;