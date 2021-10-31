import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {firestore} from "firebase-admin";
import {collection, getDocs} from "firebase/firestore";
import {doc, getDoc, deleteDoc, updateDoc, deleteField, query, where} from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";
import { SignOut } from './App';



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

export const deleteCurrentUser = async () => {
    deleteUserData()
    deleteUser(auth.currentUser).then(() => {
       console.log('deleted user')
      }).catch((error) => {
        console.log(error)
      });  
}

// This function must be called to avoid OOM errors
const deleteUserData = async () => {
        // deleting files in batch
        // var batch = firebase.firestore().batch()
    
        // await firebase.firestore().collection('users').doc(auth.currentUser.email).collection('journalEntries').getDocs().then(val => {
        //     val.map((val) => {
        //         batch.delete(val)
        //     })
        //     batch.commit()
        // })
        await deleteDoc(doc(db, 'users', auth.currentUser.email));  
}

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
    searchByTitle('orange7')
}

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
    // searchByDate(new Date())
}

// deletes a journal entry given a journal entry id
// TODO: Add journal id as argument
export const deleteJournalEntry = async () => {
    const querySnapshot = db.collection('users').doc(auth.currentUser.email).collection('journalEntries').doc('b46ae050-8325-4bb6-8b26-4eeb10258081').get().then(function(result) {
        console.log(result);
        result.ref.delete();
     })
     console.log("deleted journal entry!!")
}

// receives mental health resources given a specific mental health type (from mood score)
// TODO:  connect title and links to display on UI
// TODO: determine what type of mental health resource needed based on mood score
export const getMHResources = async (resourceType) => {
    const querySnapshot = db.collection('mentalHealthResources').doc(resourceType).get().then(function(result) {
        const data = result.data();
        const title = data['Title'];
        const link = data['Link'];
        console.log(title + ": " + link);    
     })
     console.log("received resources")
}

export const getJournalEntries = async () => {
    var journalEntries = [];
    const querySnapshot = await getDocs(collection(db.collection('users').
        doc(auth.currentUser.email), 'journalEntries').withConverter(entryConverter));
    
    querySnapshot.forEach((doc) => { 
    const entry = doc.data();
    journalEntries.push(entry)
});
    return journalEntries;
}

class JournalEntry {
    constructor (jid, text, title, createdAt, status, t2eEntryMoodAnalysis,
         t2eSentMoodAnalysis, polarityEntryMoodAnalysis, polaritySentMoodAnalysis) {
        this.jid = jid;
        this.text = text;
        this.title = title;
        this.createdAt = createdAt;
        this.status = status;
        this.t2eEntryMoodAnalysis = t2eEntryMoodAnalysis;
        this.t2eSentMoodAnalysis = t2eSentMoodAnalysis;
        this.polarityEntryMoodAnalysis = polarityEntryMoodAnalysis;
        this.polaritySentMoodAnalysis = polaritySentMoodAnalysis;
    }
    toString() {
        return this.jid + ', ' + this.text + ', ' + this.title+ ', ' + 
        this.createdAt + ', ' + this.status + ', ' + this.t2eEntryMoodAnalysis + 
        ', ' + this.t2eSentMoodAnalysis + ', ' + this.polarityEntryMoodAnalysis + 
        ', ' + this.polaritySentMoodAnalysis;
    }
}

// Firestore data converter
const entryConverter = {
    toFirestore: (jid) => {
        return {
            jid: jid.jid,
            text: jid.text,
            title: jid.title,
            createdAt: jid.createdAt,
            status:  jid.status, 
            t2eEntryMoodAnalysis: jid.t2eEntryMoodAnalysis,
            t2eSentMoodAnalysis: jid.t2eSentMoodAnalysis,
            polarityEntryMoodAnalysis: jid.polarityEntryMoodAnalysis,
            polaritySentMoodAnalysis: jid.polaritySentMoodAnalysis
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new JournalEntry(data.jid, data.text, data.title, 
            data.createdAt, data.status, data.t2eEntryMoodAnalysis,
             data.t2eSentMoodAnalysis, data.polarityEntryMoodAnalysis,
              data.polaritySentMoodAnalysis);
    }
};

export const searchByTitle = async (title) => {
    var result = []
    const q = query(collection(db.collection('users').
    doc(auth.currentUser.email), 'journalEntries'), where("title", "==", title));

    const querySnapshot = await getDocs(q.withConverter(entryConverter))
    querySnapshot.forEach((doc) => {
      const entry = doc.data()
      result.push(entry)
    //   console.log("search by title: ", title, entry)
    });
    return result
}

export const searchByDate = async (date) => {
    var millis = getMillisFromDate(date)
    var upperLimit = 86400000 + millis // adding 24 hours

    var result = []
    const q = query(collection(db.collection('users').
    doc(auth.currentUser.email), 'journalEntries'), where("createdAt", '<', upperLimit), where("createdAt", '>=', millis));

    const querySnapshot = await getDocs(q.withConverter(entryConverter))
    querySnapshot.forEach((doc) => {
      const entry = doc.data()
      result.push(entry)
      console.log("search by date: ", date, entry)
    });
    return result

}

function getMillisFromDate(date) {
  date.setHours(0,0,0,0)
  const millis = Date.parse(date)
  return millis
//   console.log(millis)
//   console.log(date);
}

function getJID() {
    const {v4: uuidv4} = require('uuid')
    return uuidv4()
}