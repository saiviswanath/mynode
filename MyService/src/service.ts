/// <reference path="../typings/globals/express/index.d.ts" />
import express = require("express");
var app = express();

app.get("/v1/test", function(req, res) {
    res.json("{\"test\" : \"test\"}");
});

app.listen(8080, function(){
    console.log("Server Listening...");
});