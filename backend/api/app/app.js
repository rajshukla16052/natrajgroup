const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



var usersRouter = require('./routes/users')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    next();
  });
  
  app.use('/api', usersRouter)


app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
