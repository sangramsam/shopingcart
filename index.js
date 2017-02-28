var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


// views is directory for all template files

app.get('/', function(request, response) {
  response.sendfile('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


