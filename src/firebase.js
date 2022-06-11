import * as firebase from "firebase";
import "firebase/database"; 

// let config = { 
   
//   apiKey: "AIzaSyA-sh6CUx3d3MHHfqugmTOzTdhbMIoXCCg",
//   authDomain: "h2fnotebkup2-97fd4.firebaseapp.com",
//   databaseURL: "https://h2fnotebkup2-97fd4-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "h2fnotebkup2-97fd4",
//   storageBucket: "h2fnotebkup2-97fd4.appspot.com",
//   messagingSenderId: "961384345618",
//   appId: "1:961384345618:web:b771027b304fc3087868cb"
// };
 
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
