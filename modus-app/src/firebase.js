import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useHistory } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDXtGR1FNQz9zxOk79Ikkqzg9j8IYi2mh0",
  authDomain: "modusdb-4d7ed.firebaseapp.com",
  projectId: "modusdb-4d7ed",
  storageBucket: "modusdb-4d7ed.appspot.com",
  messagingSenderId: "738850813503",
  appId: "1:738850813503:web:e7e97619a1eaa6510daa8a",
  measurementId: "G-84F8J1Y1VY",
  // apiKey: "AIzaSyCzMuDRDmQMFsvabbAuOzi_ca8wz-fdjcY",
  // authDomain: "modusai.firebaseapp.com",
  // databaseURL: "https://modusai-default-rtdb.firebaseio.com",
  // projectId: "modusai",
  // storageBucket: "modusai.appspot.com",
  // messagingSenderId: "986175331521",
  // appId: "1:986175331521:web:1da20cf1eab28207060840",
  // measurementId: "G-JCXJ2W0FTL",
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signInWithFacebook = async () => {
  try {
    const res = await auth.signInWithPopup(facebookProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "facebook",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//add passwordconfirm to the state
export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const handleLogout = async (email) => {
  try {
    await auth.signOut();
    alert("Signed Out!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
