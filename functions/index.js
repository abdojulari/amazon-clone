const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express =  require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQ0M6K6gdfQMYcW0crRcp08dtNZNbhgT2OV7jKbrI1q3gnSxVb54F7b5hIKTnsgbFnijpnNvOZbg5DuudvLsVfm00kSMiVAkx')

// API 
// -App config 
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))
//app.get('/abdul', (request, response) => response.status(200).send('Hello Abdul'))

app.post('/payments/create',  async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received BOOM!!! for this amount >>>', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
    // Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// -Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-27f18/us-central1/api 