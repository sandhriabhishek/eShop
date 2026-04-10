import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5M_zw_YlrgY4NBNO3EFp3yyRbdRkiQtU",
  authDomain: "eshop-a5067.firebaseapp.com",
  projectId: "eshop-a5067",
  storageBucket: "eshop-a5067.firebasestorage.app",
  messagingSenderId: "369829821223",
  appId: "1:369829821223:web:fa5f0d6e539841b5450702",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth };

























// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyB5M_zw_YlrgY4NBNO3EFp3yyRbdRkiQtU",
//   authDomain: "eshop-a5067.firebaseapp.com",
//   projectId: "eshop-a5067",
//   storageBucket: "eshop-a5067.firebasestorage.app",
//   messagingSenderId: "369829821223",
//   appId: "1:369829821223:web:fa5f0d6e539841b5450702",
//   measurementId: "G-CT4WW7D6GL",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

// export { db, auth };
