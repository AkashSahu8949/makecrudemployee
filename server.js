require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const publicpath = path.join(__dirname, './Public')

const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));

app.set('view engine', 'hbs');

//app.get('', (req, res) => {
    //res.sendFile(`${publicpath}/index.html`)
 // })
 // app.get('/signin',(req,res)=>{
//res.sendFile(`${publicpath}/signin.html`)
  //})
  //app.post('/signin',(req,res)=>{
  //res.sendFile(`${publicpath}/signin.html`)
    // })
  //app.get('/signup_success',(req,res)=>{
  //  res.sendFile(`${publicpath}/signup_success.html`)
    //  })

  //app.get('/signup',(req,res)=>{
//res.sendFile(`${publicpath}/signup.html`)
  //})
  //app.post('/signup',(req,res)=>{
  //  res.sendFile(`${publicpath}/signup.html`)
   //   })
//app.post('/signup_success',(req,res)=>{
  //res.sendFile(`${publicpath}/signup_success.html`)
  //  })
 // app.post('/signup', (req, res) => {
    // Insert Login Code Here
   // let username = req.body.username;
   // let password = req.body.password;
   // res.send(`Username: ${username} Password: ${password}`);
 // });
app.listen(62000, () => {
    console.log('Express server started at port : 62000');
});

app.use('/employee', employeeController);