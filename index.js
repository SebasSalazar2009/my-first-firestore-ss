
import admin from "firebase-admin"; // imports firebase library of tools

import serviceAccount from "./credentials.js";// import our credentials to connect to firebase

admin.initializeApp({ // connects to our firebase project
  credential: admin.credential.cert(serviceAccount)// creating a certificate from our credentials
});

//now we are connected to OUR firebase project & related services

const db = admin.firestore();// creates a shortcut to access the firestore database
const restaurantcol = db.collection('restaurant');



const restaurant = {
    name: "Mister 01",
    address: "555 N federal Hwy",
    cuisine: "pizza",
    rating: 4.9,
    phone: "(786) 677-2903",
} //creating an onject -- in this case a specific restaurant we want to add to our db

 db.collection("restaurants").add(restaurant) // adding the restaurant to our restaurant collection
 .then(doc => console.log("created restaurant", doc.id))// handle resolve
.catch(err => console.error(err))// handle reject


const restaurant2 = {
    name: 'bolay',
    addres: '7060 w palmetto park rd',
    cuisine: 'american',
    rating: 4.6,
}

async function addrestaurant(data) {
    try {
    const doc = await db.collection('restaurant').add(data)// add restaurant to collection
    console.log("created restaurant", doc.id)// handle resolve 
    } catch(err) {
    console.error(err)// handle reject
    }

    
}

addrestaurant(restaurant2)