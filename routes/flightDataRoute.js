const express = require("express");
const router = express.Router();
const flightDb = require("../models/flights");

//adding flight data
router.post("/addflight", async (req, res) => {
  try {
    const AirAsia = new flightDb({
      "name": "AirAsia",
      "logo": "https://w7.pngwing.com/pngs/697/90/png-transparent-airasia-malaysia-flight-airline-travel-travel-love-text-logo-thumbnail.png",
      "source": "Delhi",
      "destination": "Jaipur",
      "date": [1, 2, 3, 7, 8, 9, 15, 18, 20],
      "rate": 1000
    });

    const IndiGo = new flightDb({
      "name": "IndiGo",
      "logo": "https://download.logo.wine/logo/IndiGo/IndiGo-Logo.wine.png",
      "source": "Delhi",
      "destination": "Jaipur",
      "date": [3, 5, 7, 8, 9, 14, 15, 20],
      "rate": 1200

    });

    const Vistara = new flightDb({
      "name": "Vistara",
      "logo": "https://logodix.com/logo/1638067.jpg",
      "source": "Delhi",
      "destination": "Jaipur",
      "date": [1, 2, 5, 6, 8, 9, 11, 12, 13, 17, 19],
      "rate": 1550
    });

    const Alliance_Air = new flightDb({
      "name": "Alliance Air",
      "logo": "https://w7.pngwing.com/pngs/499/882/png-transparent-delhi-air-india-limited-airline-logo-others.png",
      "source": "Delhi",
      "destination": "Jaipur",
      "date": [1, 2, 5, 6, 8, 9, 11, 12, 13, 16, 20],
      "rate": 1250
    });

    const result = await flightDb.insertMany([AirAsia, IndiGo, Vistara, Alliance_Air]);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Searching flights
router.post("/", async (req, res) => {
  const { source, destinaition, date } = req.body;
  const dt = Number(date)
  try {
    const allflights = await flightDb.find({ source: source, destination: destinaition, date: dt });
    res.status(200).json(allflights);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/***type-error middle ware require a function */
module.exports = router;