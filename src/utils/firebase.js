import firebase from 'firebase/app'
import "firebase/database"

var config = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  databaseURL: process.env.REACT_APP_FB_URL,
  projectId: process.env.REACT_APP_FB_PID,
  storageBucket: "",
  messagingSenderId: "53752354356"
};
firebase.initializeApp(config);

export const fbDatabase = firebase.database();
