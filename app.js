const express = require('express')
const app = express()
var path = require('path')
const port = process.env.PORT || 3000
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.listen(port, function(){
    console.log('listening to port %d', port);
})

app.use(express.static(path.join(__dirname, '/public')));

app.post('/submit', function(res, req){
    console.log(res.body.lastName)
    //https://freefrontend.com/css-forms/
})