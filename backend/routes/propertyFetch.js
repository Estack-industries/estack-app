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

// Get listed properties of a seller
router.post('/listProperties', (req, res) =>{
  console.log("enter this function.");
  var email = req.body.email;
  console.log("owner email ", email);
  var sqlQuery = `SELECT * from properties where owner_email = ?`;
  db.query(sqlQuery, [email], (err, result) =>{
    if(err){
      console.log(err);
      res.status("500").send({message : "Error on listing owners' properties."});
    }else{
      console.log(result);
      property_list = JSON.stringify(result);
      res.status("200").send({message: "Return Property List.", list: property_list});
    }
  });
});



router.post('/filterProperties', (req, res)=>{
  var sqlQuery = `SELECT * from properties `;
  var sqlQueryValues = [];
  var addressStr = "";
  // console.log(req.body);
  for(const key in req.body){
    if(key === "numBedrooms" || key === "numBathrooms" || key === "squareft" || key === "yearBuilt" || key === "listingPrice"){
      lowerBound = req.body[key][0];
      upperBound = req.body[key][1];
      if(!sqlQuery.includes("where")){
        sqlQuery += `where ${key} <= ? and ${key} >= ? `;
      }else{
        sqlQuery += `and ${key} <= ? and ${key} >= ? `;
      }
      sqlQueryValues.push(upperBound);
      sqlQueryValues.push(lowerBound);
    }else if(key !== "street" && key !== "zip"){
      if(!sqlQuery.includes("where")){
        sqlQuery += `where ${key} = ? `;
      }else{
        sqlQuery += `and ${key} = ? `;
      }
      sqlQueryValues.push(req.body[key]);
      if(key === "state" || key === "city"){
        if(addressStr === ""){
          addressStr += req.body[key];
        }else{
          addressStr += ', ' + req.body[key];
        }  
      }
    }else{
      if(addressStr === ""){
        addressStr += req.body[key];
      }else{
        addressStr += ', ' + req.body[key];
      }
    }
    // console.log(`${key}: ${req.body[key]}`);
  }
  console.log(sqlQuery);
  console.log(addressStr);
  var origins = [];
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
    origins.push(location.lat);
    origins.push(location.lng);


    db.query(sqlQuery, sqlQueryValues, (err, result) => {
      if(err){
        console.log(err);
        res.status("500").send({message : "Error on listing owners' properties."});
      }else{
        console.log(result);
        console.log(origins);
        if(origins.length > 0){
          for(let i = 0; i < result.length; i++){
            var property = result[i];
            console.log(property);
            var addressStr = property.street + ', ' + property.city + ', ' + property.state + ', ' + property.zip;
            console.log("property: ", addressStr);
            if(property.lat !== null && property.lng !== null){
              var destinations = [property.lat, property.lng];
              console.log(origins[0].toString() + ', ' + origins[1].toString());
              console.log(destinations[0] + ', ' + destinations[1]);
              mapsClient.distancematrix({
                params:{
                  origins: origins[0].toString() + ', ' + origins[1].toString(),
                  destinations: destinations[0] + ', ' + destinations[1],
                  key: 'AIzaSyDFaj4uNEr_8mZyyu7YDL32sXgedMkUJuk'
                },
                timeout: 1000,
              })
              .then((response) => {
                console.log(response);
                // console.log(response.data.results[0].geometry);
              })
              .catch((error) => {
                // console.log(error);
                console.log(error.response);
              })
            }else{
              var destinations = [];
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
                destinations.push(location.lat);
                destinations.push(location.lng);
                property.lat = location.lat;
                property.lng = location.lng;
                getDistance(origins, destinations);
              })
              .catch((error) => {
                // console.log(error);
                console.log(error.response);
              })
            }         
          }
        }
        property_list = JSON.stringify(result);
        res.status("200").send({message: "Return Property List", list: property_list});
      }
    });
  })
  .catch((error) => {
    // console.log(error);
    console.log(error.response);
  })
});

//get distance between origins and destinations
const getDistance = async function(origin, destination) {
    console.log(origin, destination);
    mapsClient.distancematrix({
      params:{
        origins: origin[0] + ', ' + origin[1],
        destinations: destination[0] + ', ' + destination[1],
        key: 'AIzaSyDFaj4uNEr_8mZyyu7YDL32sXgedMkUJuk'
      },
      timeout: 1000,
    })
    .then((response) => {
      console.log(response);
      return response;
      // console.log(response.data.results[0].geometry);
    })
    .catch((error) => {
      // console.log(error);
      console.log(error.response);
      return error;
    })
}


module.exports = router;
