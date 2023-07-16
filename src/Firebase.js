import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const FirebaseConfig = {
    apiKey: "AIzaSyCw_KMTL5lhKSDEwbUT2zY27tKi_tnnp-Y",
    authDomain: "theaterfest-3140c.firebaseapp.com",
    projectId: "theaterfest-3140c",
    storageBucket: "theaterfest-3140c.appspot.com",
    messagingSenderId: "827295848527",
    appId: "1:827295848527:web:c2e12797bc4f8388ddb23a",
    measurementId: "G-HSLCVESPB7"
};

firebase.initializeApp(FirebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export {storage, db};
