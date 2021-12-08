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

/* GET users listing. */

router.use(express.json());


//create session
router.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

//DataBase Details you need to reconfig this to work on you localhost and mySQL DB
var db = mysql2.createPool({
  host:"localhost",
  user:"root",
  password: "password",
  database: "estackdb",
  port: 3306,
})


router.use(body.urlencoded({extended : true}));


router.use(cookieParser());





//Checking if login details match current users on DB
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("post /login with email ", email, ", password ", password);

  db.query(
    //fist search for user email in DB
    "SELECT * FROM users WHERE email = ?;",
    email,
    (err,result)=>{
      if(err){
        console.log("failed to query from db.");
        res.send(err);
      };
      
      if(result.length > 0){
        //check if hashed password matches user
        console.log("query result: ", result[0]);
        bcrypt.compare(password, result[0].password, (error, response) => {
          if(error){
            //if password is wrong
            console.log("incorrect password");
            res.send({message:'Wrong Password'});
          }
          if(response){
            console.log('logged in');
            req.session.user = result;
            console.log(req.session.user);
            res.status(200).send({message: 'logged in'});
          }else{
            console.log("wrong password.");
            res.status(400).send({message: 'Wrong Password'});
          }
        });
        // bcrypt.compare(password, result[0].password, (error, response) => {
        //   if (response) {
        //     console.log('logged in');
        //     req.session.user = result;
        //     console.log(req.session.user);
        //     res.send({message : 'logged in'});
        //   }else if (error){
        //     //if password is wrong
        //     console.log("incorrect password");
        //     res.send({message:'Wrong Password'})
        //   }});
        //no User found
      }else{
        console.log("Email address not found.");
        res.send({message : 'Email Address not found'})
      };
    }
  )
 
});


router.get("/login", (req, res) => {
  console.log("get session users in ", req.session);
  if (req.session.user) {
    console.log(req.session.user.email)
    
    res.send({ loggedIn: true, user: req.session.user });
    
  } else {
    res.send({ loggedIn: false });
    console.log("no session user found.");
    
  }
});
         

//Checking if users already exists
router.post('/Auth' , (req,res) => {
  var email = req.body.email;

  db.query( "SELECT * FROM users WHERE email = ?;",
  email,

  (err,result)=>{
    if(err){
      res.send(err);
    }
    
    if(result != undefined && result.length > 0){
      res.send({message : 'User already exists'})
    }else{
      res.send(result);
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
      console.log("hash error: ", err);
    }else{
      console.log("original password: ", password);
      console.log("hash: ", hash);
      db.query(sqlInsert, [email , hash], (err,result) =>{
        if(err){
          console.log("query error: ", err);
          res.status(409).send({message: "Email exists"});
        }
        res.status(200).send({message: "Success"});
  } ) }
    

  });

  
})


module.exports = router;
