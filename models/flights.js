const mongoose = require('mongoose');
// making schema of mongodb
const flightSchema = new mongoose.Schema(
    {
        //once we set, unique:true it will work even after ereaseing
        name: { type: String },
        logo: { type: String },
        source: { type: String },
        destination: { type: String },
        date: { type: Array },
        rate: { type: Number },
    }
);

//Create Model
const flightDb = mongoose.model("flightdb", flightSchema);
module.exports = flightDb;