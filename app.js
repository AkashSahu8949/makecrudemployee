var express=require("express");
var path = require('path');
const publicpath = path.join(__dirname, '/Public/')
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/UserData');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
   console.log("connection succeeded");
})
var app=express()
app.use(bodyParser.json());
app.use(express.static('Public'));
app.use(bodyParser.urlencoded({
   extended: true
}));
app.get('/signin', (req, res) => {
    res.sendFile(`${publicpath}/signin.html`)
  })

app.post('/sign_up', function(req,res){
   var name = req.body.name;
   var email =req.body.email;
   var pass = req.body.password;
   var phone =req.body.phone;

   var data = {
      "name": name,
      "email":email,
      "password":pass,
      "phone":phone
   }
   db.collection('details').insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
   });
   return res.redirect('success.html');
})
app.post('/sign_in', function(req,res){
   var username = req.body.username;
   var password =req.body.password;
  // var forget = req.body.forget;
   //var phone =req.body.phone;

   var data = {
      "username": username,
      "password": password,
      //"forget":forget,
      //"phone":phone
   }
   db.collection('details').insertOne(data,function(err, collection){
   if (err) throw err;
      console.log("Record inserted Successfully");
   });
   return res.redirect('success1.html');
})
app.get('/signup',(req,res)=>{
res.set({
   'Access-control-Allow-orginal':'*'
});
return res.redirect('/signup.html');
})
app.get('/',function(req,res){
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect('/index.html');
}).listen(5000)

console.log("server listening at port 5000");