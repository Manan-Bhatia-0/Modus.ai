import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {firestore} from "firebase-admin";

const firebaseConfig = {
    apiKey: "AIzaSyDXtGR1FNQz9zxOk79Ikkqzg9j8IYi2mh0",
    authDomain: "modusdb-4d7ed.firebaseapp.com",
    projectId: "modusdb-4d7ed",
    storageBucket: "modusdb-4d7ed.appspot.com",
    messagingSenderId: "738850813503",
    appId: "1:738850813503:web:e7e97619a1eaa6510daa8a",
    measurementId: "G-84F8J1Y1VY"
};

let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}else {
   app = firebase.app(); // if already initialized, use that one
}
// const app = firebase.initializeApp(firebaseConfig);
let currentUser;
export const auth = app.auth();
export const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        currentUser = user;
        const query = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (query.docs.length === 0) {
            await db.collection("users").doc(user.email).set({
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
export const signInWithEmailAndPassword = async (email, password) => {
    try {
        const res = await auth.signInWithEmailAndPassword(email, password);
        currentUser = res.user;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        currentUser = user;
        await db.collection("users").add({
            uid: user.uid,
            name: name,
            authProvider: "local",
            email: email,
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
export const logout = () => {
    auth.signOut();
};

// This is a generic function.
// the caller must check if entry already exists (check by title?)
export const submitJournalEntry = async (title, text) => {
    const jid = getJID()
    await db.collection('users').doc(auth.currentUser.email).collection('journalEntries').doc(jid).set({
        jid: jid,
        text: text,
        title: title,
        createdAt: Date.now(),
        status: 'submitted',
        t2eEntryMoodAnalysis: '',
        t2eSentMoodAnalysis: '',
        polarityEntryMoodAnalysis: '',
        polaritySentMoodAnalysis: ''
    })
}

// assumes that ID is generated automatically by firestore as the docID for each journal entry
export const saveJournalEntry = async (title, text) => {
    const jid = getJID()
    await db.collection('users').doc(auth.currentUser.email).collection('journalEntries').doc(jid).set({
        jid: jid, 
        text: text,
        title: title,
        createdAt: Date.now(),
        status: 'saved',
        t2eEntryMoodAnalysis: '',
        t2eSentMoodAnalysis: '',
        polarityEntryMoodAnalysis: '',
        polaritySentMoodAnalysis: ''
    })
}

function getJID() {
    const uuidv4 = require("uuid/v4")
    return uuidv4()
}
//export const getJID = async () => {
    //const uuidv4 = require("uuid/v4")
    //uuidv4()
    //const jid = await db.collection('users').doc(auth.currentUser.email).collection('journalEntries').doc(jid).get()
    //if (jid)
    
//}