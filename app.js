const express = require('express')
const app = express()
var path = require('path')
const port = process.env.PORT || 3000

app.listen(port, function(){
    console.log('listening to port %d', port);
})

app.use(express.static(path.join(__dirname, '/public')));