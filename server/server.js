var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post('/api/message', function(req, res){
    console.log(req.body);
    res.send(req.body);
    res.status(200);
});

var server = app.listen(5000, function (){
    console.log("listening in port " + server.address().port);
});
