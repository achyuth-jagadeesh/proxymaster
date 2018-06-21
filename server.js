var express = require('express');
var app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/application', express.static('src'));

app.get('/todo', function (req, res) {
	res.send("Record added");
})

app.post('/todo', function (req, res) {
    res.send("Record added");
})

app.post('/update', function (req, res) {
   res.send("Record Updated");
})

app.post('/delete', function (req, res) {
    res.send("Record Deleted");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})