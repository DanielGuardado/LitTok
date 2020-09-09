import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = require("./firebase1");
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
