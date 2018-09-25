var express = require('express');
var weatherApp = express();
var weatherRes = require(__dirname + '/lib/weather-response');
weatherApp.get('/sample', function(req, res){
	console.log('weather info req received for sample text');
	res.send(weatherRes.textResponse);

})

weatherApp.get('/sampleJSON', function(req, res){
	console.log('weather info req received for sample json');
	res.json(weatherRes.jsonResponse);

})

var appServer = weatherApp.listen(3001, function(){
	console.log('weather-info service started');
});