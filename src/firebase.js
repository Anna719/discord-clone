import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwnBmlJRnc2BIuXsQiYo2zR2dgS1o2nWA",
    authDomain: "discord-clone-1ef4f.firebaseapp.com",
    projectId: "discord-clone-1ef4f",
    storageBucket: "discord-clone-1ef4f.appspot.com",
    messagingSenderId: "244302884444",
    appId: "1:244302884444:web:50052c59e9f8d84b484099",
    measurementId: "G-W65535NPHL"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;