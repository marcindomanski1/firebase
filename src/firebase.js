// Initialize Firebase
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAXnjspRpcibjEcmjnvkpzluZh6z8qlGRI",
    authDomain: "personal-ab990.firebaseapp.com",
    databaseURL: "https://personal-ab990.firebaseio.com",
    projectId: "personal-ab990",
    storageBucket: "personal-ab990.appspot.com",
    messagingSenderId: "728366966787"
};
firebase.initializeApp(config);

export const database = firebase.database();