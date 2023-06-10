const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const port = process.env.PORT || 8000;
const uri = process.env.URI || "mongodb+srv://sajeed:sajeed123@cluster0.ivnebch.mongodb.net/?retryWrites=true&w=majority";
app.use(cors());
dotenv.config();

// making connction 
mongoose.connect(uri).then(() => {
    console.log('connection successful');
    console.log(`db running at port`, port);
    app.listen(port, (err) => {
        if (err) console.log(err);
    });
}).catch((err) => console.log(err, 'no connection'));

app.use(express.json());

const User = require('./models/flights');

const ft = require('./routes/flightDataRoute');
app.use(ft);

// app.listen(port);