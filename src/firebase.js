import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC009M4v4t0VpCxfKQlAtW8dEDx_GxNeTU",
  authDomain: "auth101-e8876.firebaseapp.com",
  projectId: "auth101-e8876",
  storageBucket: "auth101-e8876.appspot.com",
  messagingSenderId: "439781182161",
  appId: "1:439781182161:web:17d3f92e41d9666c9593f0",
  measurementId: "G-5C79D4EBZ2",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
