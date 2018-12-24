var express = require('express')

// App setup

let app = express()

const server = app.listen(4000, function(){
    console.log('lsitening to request on port 4000')
})

//Static files 

app.use(express.static('public'));