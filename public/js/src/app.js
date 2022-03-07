import { initializeApp } from 'firebase/app';
import { 
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc, getDoc 
} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMWbVDwQdKLh-L2dE4TJsjO92pNLnRuyc",
    authDomain: "coffee-shop-1febf.firebaseapp.com",
    projectId: "coffee-shop-1febf",
    storageBucket: "coffee-shop-1febf.appspot.com",
    messagingSenderId: "105085732245",
    appId: "1:105085732245:web:97bac59b4c8b53ea77229c",
    measurementId: "G-QL9WS9NQP8"
};

"use strict";

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection reference
const costumers = collection(db, 'costumers'); 

// ADD DOCUMENTS
$(document).ready(() => {

    const queue = $('.queue .fill');

    // get collection data
    getDocs(costumers).then(snapshot => {
        let costumers = [];
    
        // get the dat and id of the document
        snapshot.docs.forEach(doc => {
            costumers.push({ ...doc.data(), id: doc.id });
        });
    
        console.log(costumers); // test for checking

        // insert all data
        new Order().setQueue(queue, costumers);
    }).catch(err => {
        console.log(err.message);
    });

    // invisible elements
    const form = $('.form');
    const secondary = $('.secondary');
    const fill_2 = $('.fill-2');
    const coffee = $('.coffee');
    const fill_3 = $('.fill-3');
    const fill_4 = $('.fill-4');
    const confirm = $('.confirm');

    const costumer = {}; // main costumer to save from the firebase

    // trigger order
    fill_3.on('click', '#order', event => {
        let confirm_total = 0;
        const product_collection = [];

        // loop all inputs for confirmation
        const inputs = $('input[type=text], input[type=email]');
        const orders = $('input[type=number]');

        inputs.each((index, element) => {
            costumer[$(element).attr('name')] = element.value;
        });

        orders.each((index, element) => {
            let quantity = Number.parseInt(element.value);
            let price = Number.parseInt(element.dataset.price) * quantity;
            confirm_total += price;

            product_collection.push({
                name: element.dataset.name,
                price: price,
                quantity: quantity
            });

            costumer.products = product_collection;
            costumer.pay = confirm_total;
        });

        new Order(costumer).setTemplate(fill_4.find('.text-start'));
        confirm.slideDown(250);
        fill_4.slideDown(250);
    })


    // trigger the last & confirmed order
    fill_4.on('click', '.ok', event => {
        console.log(event.currentTarget);
        console.log(costumer);
        addDoc(costumers, costumer).then(response => {
            window.location.replace("http://127.0.0.1:5500/public/html/costumers.html");
        });
    });

});