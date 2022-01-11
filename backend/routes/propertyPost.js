var express = require('express');
var router = express.Router();
var mysql2 = require('mysql2');
var body = require('body-parser');
var bcrypt = require("bcrypt");
var saltRounds = 10;
const session = require("express-session");
var cors = require('cors');
const app = require('../app');
const cookieParser = require('cookie-parser');
const axios = require('axios');

const {Client} = require("@googlemaps/google-maps-services-js");
const mapsClient = new Client({});

router.use(express.json());



//DataBase Details you need to reconfig this to work on you localhost and mySQL DB
var db = mysql2.createPool({
  host:"127.0.0.1",
  user:"root",
  // password: "password",
  database: "estackdb"
})


router.use(body.urlencoded({extended : true}));


router.use(cookieParser());


//Posting property to DB
router.post('/post' , (req,res) =>{
  var street = req.body.street;
  var city  = req.body.city;
  var state = req.body.state;
  var zip = req.body.zip;
  // getGoogleGeocode(address);
  var addressStr = street +', ' + city + ', ' + state;
  console.log(addressStr);
  var lat, lng;
  mapsClient.geocode({
    params:{
      address: addressStr,
      key: 'AIzaSyDFaj4uNEr_8mZyyu7YDL32sXgedMkUJuk'
    },
    timeout: 1000,
  })
  .then((response) => {
    // console.log(response);
    console.log(response.data.results[0].geometry);
    location = response.data.results[0].geometry.location;
    lat = location.lat;
    lng = location.lng;

    var type = req.body.type;
    var numBedrooms = req.body.numBedrooms;
    var numBathrooms = req.body.numBathrooms;
    var squareft = req.body.squareft;
    var yearBuilt = req.body.yearBuilt;
    var garageParking = req.body.garageParking;
    var ac = req.body.ac;
    var wheelChairAcces = req.body.wheelChairAcces;
    var offStreetParking = req.body.offStreetParking;
    var balcony = req.body.balcony;
    var furnished = req.body.furnished;
    var description = req.body.description;
    var hardWood = req.body.hardWood;
    var listingPrice = req.body.listingPrice;

    var property_name = req.body.property_name;
    var owner_email = req.body.owner_email;

    var sqlInsert = `INSERT INTO properties (street, city, state, zip, lat, lng, type, numBedrooms, numBathrooms,
                      squareft, yearBuilt, garageParking, ac, wheelChairAcces, offStreetParking
                      ,balcony , furnished, description, hardWood, listingPrice, property_name, owner_email) 
                      VALUES (?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?)`

  

    
      db.query(sqlInsert, [street, city, state, zip, lat, lng, type, numBedrooms, numBathrooms,
        squareft, yearBuilt, garageParking, ac, wheelChairAcces, offStreetParking
        ,balcony , furnished, description, hardWood, listingPrice, property_name, owner_email], (err,result) =>{
        if(err){
          console.log(err);
          res.status("500").send({message : "Error on inserting this property"});
        }else{
          res.status("200").send({message : 'OK'});
        }
        console.log(err)
    }) 
  })
  .catch((error) => {
    // console.log(error);
    console.log(error.response);
  })    

  });

module.exports = router;
