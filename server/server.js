const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemon = require('nodemon');
// const port = process.env.PORT || 5000;
const moongoose = require('mongoose');
const db = require('./Config/db');
const User = require('./Models/Users');
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('working')
});







app.post('/user',(req,res)=>{

  var signup = new User(req.body)

   signup.save((err,data)=>{
     if (err) {
       return res.json({ success: false, err: err });
     }

     res.json({ success: true, data: data });
   });



})
app.post('/test', (req,res)=> {
  console.log('console');
})

app.listen( 5000,()=> {
    console.log(`Working on port: 5000`)
})


