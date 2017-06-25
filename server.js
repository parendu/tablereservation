var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

//  sets up the Express  app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

 
var newReservation = [{
	customerName: 'Riyu',
	PhoneNumber: 714-897-9865,
	customerEmail: 'writeme@gmail.com',
	customerID: 'RIYU'
}];

var waitingList = [{
	customerName: 'John',
	PhoneNumber: '848-464-1074',
	customerEmail: 'reach@gmail.com',
	customerID: 'John'
}];

app.get("/", function  (req, res){
	res.sendFile(path.join(__dirname, "./index.html"));
	// console.log(res);	
});

app.get("/table", function(req, res) {
	res.sendFile(path.join(__dirname,"./table.html"));
	// console.log(res)
});
		
app.get("/reservation", function(req, res) {
	// console.log("/reservation")
	res.sendFile(path.join(__dirname,"./reservation.html"));
	
});


app.get("/api/tables", function(req, res) {
  return res.json(newReservation);
})


//reserve new table
app.post("/api/new", function(req, res){
	var newTableReservation =req.body;
			console.log(newTableReservation);
	if(newReservation.length <= 5){

		newReservation.push(newTableReservation);


	} else {

		waitingList.push(newTableReservation);


	}
	return res.json(newReservation);
})




app.listen(PORT, function(){
	console.log("server is listening" + PORT);
});


