import firebase from "firebase/app"
import "firebase/firebase"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyBd7Hd-X6XUFqXfyPBsrXM7D6lO3zmV0tU",
    authDomain: "fir-react-vk.firebaseapp.com",
    databaseURL: "https://fir-react-vk.firebaseio.com",
    projectId: "fir-react-vk",
    storageBucket: "fir-react-vk.appspot.com",
    messagingSenderId: "41810057252",
    appId: "1:41810057252:web:bc2c695abd4585ab8fa0b1",
    measurementId: "G-563NR8MR5Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;