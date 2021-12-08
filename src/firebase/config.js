import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsMlbP_xmqc7kxaY7YW7pAS23HmHzbcsA",
    authDomain: "cooking-ninja-site-b9545.firebaseapp.com",
    projectId: "cooking-ninja-site-b9545",
    storageBucket: "cooking-ninja-site-b9545.appspot.com",
    messagingSenderId: "146400532123",
    appId: "1:146400532123:web:ac65f2e1dce6fbdc6f183e"
};

firebase.initializeApp(firebaseConfig)

const projectFireStore = firebase.firestore()

export { projectFireStore }