const express = require('express');
const app = express();


app.use(express.static('web-front-end'))

app.get("/", function(req, res) {
    console.log("SADASDASDASD")

});

app.listen(5500, function() {
    console.log("LISTENING1")
})
