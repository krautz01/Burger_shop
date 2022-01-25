import Rebase from 're-base';
import firebase from 'firebase'; //base of data`s

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAjlBoc9YV0rZNRCBn3heysRzY5-p17BbA",
  authDomain: "very-hot-burgers-29a82.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-29a82-default-rtdb.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;