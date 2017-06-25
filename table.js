var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
var Path = 3000;

//  sets up the Express  app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyparser.json({type: "application/vnd.api+json"}));

 
var tableReservation = [{
name: Riyu
Phone: 714-897-9865
Email: writeme@gmail.com
Unique ID: RIYU

name: Sam
Phone: 324-897-5467
Email: reachme@gmail.com
Unique ID: Sam

}];











