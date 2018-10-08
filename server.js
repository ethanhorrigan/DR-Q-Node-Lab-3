var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.send('Hello World');
})

app.get('/hello/:name', function (req, res) {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})
 
 //var jsonResponse = require("response.json"); // Path to response.JSON

 app.get('/api/data', function(req, res){
    const posts = [
        {
            "posts": [
                {
                    "id": "fadf12421l",
                    "title": "First server-side post",
                    "content": "This is coming from the server"
                },
                {
                    "id": "ksajflaj132",
                    "title": "Second server-side post",
                    "content": "This is coming from the server!"
                }
            ]
        }
    ]
});

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})