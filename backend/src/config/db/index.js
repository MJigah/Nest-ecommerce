const firebase = require('firebase');
const config = require('../../utils/firebase/index');

const db = firebase.intializeApp(config.firebaseConfig);

module.exports = db;