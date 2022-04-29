import admin from "firebase-admin"; // imports firebase library of tools

import serviceAccount from "./credentials.js";// import our credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project
  credential: admin.credential.cert(serviceAccount)// creating a certificate from our credentials
});

//now we are connected to OUR firebase project & related services

const db = admin.firestore();// creates a shortcut to access the firestore database
const restaurantcol = db.collection('restaurant');

// restaurantcol.get() // get all restaurants
// .then(snapshot => {
//     // loop through all results
//     snapshot.docs.forEach(doc => console.log(doc.data()))
// })
// .catch(console.error)

restaurantcol.where("name", '==', 'bolay').get()
.then(snapshot => {
    // loop through all results
    snapshot.docs.forEach(doc => console.log(doc.data()))
})
.catch(console.error)