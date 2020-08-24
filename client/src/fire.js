import firebase from 'firebase'


//TODO: Put all these details in a .env
const firebaseConfig = {
    apiKey: "AIzaSyDttNFOY0eZoD3rVb4IQvuBcKABXys-xpk",
    authDomain: "grub-impact.firebaseapp.com",
    databaseURL: "https://grub-impact.firebaseio.com",
    projectId: "grub-impact",
    storageBucket: "grub-impact.appspot.com",
    messagingSenderId: "939654247335",
    appId: "1:939654247335:web:6546ace00b2a51738dfc82"
  };

const app = firebase.initializeApp(firebaseConfig)

export default app