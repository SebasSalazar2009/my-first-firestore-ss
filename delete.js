
//created restaurant vcfTfDs9AsRVbNlqolqk
//created restaurant WSbjcSjRHCuq2AMXZmnf



import admin from "firebase-admin"; // imports firebase library of tools

import serviceAccount from "./credentials.js";// import our credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project
  credential: admin.credential.cert(serviceAccount)// creating a certificate from our credentials
});

//now we are connected to OUR firebase project & related services

const db = admin.firestore();// creates a shortcut to access the firestore database

const restaurantcol = db.collection('restaurant');


//delete restaurant vcfTfDs9AsRVbNlqolqk
restaurantcol.doc('vcfTfDs9AsRVbNlqolqk').delete()
.then(res => console.log('success deleting vcfTfDs9AsRVbNlqolqk!! '))
.catch(err => console.error('error deleting vcfTfDs9AsRVbNlqolqk: ', err))

restaurantcol.doc('WSbjcSjRHCuq2AMXZmnf').delete()
.then(res => console.log('success deleting WSbjcSjRHCuq2AMXZmnf!! '))
.catch(err => console.error('error deleting WSbjcSjRHCuq2AMXZmnf: ', err))

