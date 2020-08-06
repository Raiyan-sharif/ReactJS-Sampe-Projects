import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyCu1_FMN8-JNhjK4-QwZ2xaC-nx145kKys",
    authDomain: "covid19react.firebaseapp.com",
    databaseURL: "https://covid19react.firebaseio.com",
    projectId: "covid19react",
    storageBucket: "covid19react.appspot.com",
    messagingSenderId: "665165737511",
    appId: "1:665165737511:web:de8e1f121d34f579e22802",
    measurementId: "G-4NVLBTHHDJ"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire
//   firebase.analytics();
