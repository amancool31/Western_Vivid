import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDVYtgczUbOLgzvQe3nO89nhJ4LEi_ZL24",
  authDomain: "western-vivid-efd88.firebaseapp.com",
  databaseURL: "https://western-vivid-efd88.firebaseio.com",
  projectId: "western-vivid-efd88",
  storageBucket: "western-vivid-efd88.appspot.com",
  messagingSenderId: "1008397111063"
});

const auth = app.auth();
export default auth;