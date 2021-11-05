var express = require('express');
var router = express.Router();
var mysql2 = require('mysql2');
var bodyParser = require('body-parser');
var bcrypt = require("bcrypt");
var saltRounds = 10;
const session = require("express-session");
/* GET users listing. */

router.use(express.json());

//DataBase Details you need to reconfig this to work on you localhost and mySQL DB
var db = mysql2.createPool({
  host:"localhost",
  user:"root",
  password: "password",
  database: "estackdb"
})


//Checking if login details match current users on DB
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  
 db.query(
  //fist search for user email in DB
  "SELECT * FROM users WHERE email = ?;",
  email,
  (err,result)=>{
    if(err){
      res.send(err);
    };
    
    if(result.length > 0){
      //check if hashed password matches user
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          res.send({message : 'logged in'})
        }else{
        //if password is wrong
        res.send({message:'Wrong Password'})
        }});
      
      //no User found
    }else{
      res.send({message : 'Email Address not found'})
    };
  }
)
 
});

         

//Checking if users allready exists
router.post('/Auth' , (req,res) => {
  var email = req.body.email;

  db.query( "SELECT * FROM users WHERE email = ?;",
  email,

  (err,result)=>{

    if(err){
      res.send(err);
    };
    
    if(result.length > 0){
      res.send({message : 'User already exists'})
    }else{
      res.send(result)
    };
  }
)
 
});

//Posting user details to the Data Base
router.post('/register' , (req,res) =>{
  var email = req.body.email;
  var password = req.body.password;
  var sqlInsert = "INSERT INTO users (email, password) VALUES (?,?)"
//pasword Hasshing
  bcrypt.hash(password, saltRounds, (err, hash) => { 

    if (err) {
      console.log(err);
    }else{
    db.query(sqlInsert, [email , hash], (err,result) =>{
      console.log(err)
  } ) }
    

  });

  
})


module.exports = router;
