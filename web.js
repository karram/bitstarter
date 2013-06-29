var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    //response.send('Hello World 2!');
    var bfr = fs.readFileSync("index.html");
    var contents = bfr.toString();
    //console.log(contents);
    response.send(contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});