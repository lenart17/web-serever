var express = require('express');
var PORT = 3000;		// when a variable name in js is capitalized it is saying not to be changed

var app = express();
var middleware = require('./middleware.js');

//app.use - application level middleware
app.use(middleware.logger);


//first parameter is the route (in this example we are indicating root url)
//req = request - any data passed along - could be cookies...
//res - data to send back
//to use route middleware use as the second paramter
app.get('/about', middleware.requireAuthentication , function(req, res){
	res.send("All About Us!");
});

//alllow access to a folder
// __dirname   -  gets filepath from your machine
app.use(express.static(__dirname + '/public'));


//tell the app to listen
//first aramter is the port to listen on
//second parameter is the function called after starting of the server
app.listen(PORT, function(){
	console.log('Express Server Started on port: ' + PORT);
});