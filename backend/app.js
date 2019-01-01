var express = require('express');
var path  = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mognodb connection with mlab
var url = 'mongodb://Sarthak:Sarthak98@ds151383.mlab.com:51383/local-library';
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');  //Import routes for "catalog" area of site
app.use(express.static(path.join(__dirname,'angular')));


mongoose.connect(url,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//bodyParser middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept'),
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,PUT,DELETE,OPTIONS,authorization'),
     next();
});

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'angular','index.html'))
})
module.exports = app;