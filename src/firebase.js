import * as firebase from "firebase";
import "firebase/database"; 
 
 
let config = { 
  apiKey: "AIzaSyBL0GvJTldvat4OVnGZ0_m8z8yyKsRPkks",
  authDomain: "h2fnotebkup3tn.firebaseapp.com",
  databaseURL: "https://h2fnotebkup3tn-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "h2fnotebkup3tn",
  storageBucket: "h2fnotebkup3tn.appspot.com",
  messagingSenderId: "986063156945",
  appId: "1:986063156945:web:8721bfb9ffc74f4dfff7f0"
};

  

firebase.initializeApp(config);

export default firebase.database();
