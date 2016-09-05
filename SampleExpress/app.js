var express = require('express');
var expressparams = require('express-params');
var sample = require("./lib/sample.js");
var app = express();
expressparams.extend(app);
var count = 0;
(function counter(i) {
function count() {
    i++;
    count = i;
}
count();
})(0);

app.param("id", /^\d+$/);
app.get("/test/:id", function(req, res) {
    counter()
    var json = {
        id : req.params.id[0],
        cnt: count
    };
    console.log(json)
    sample.func(json);
    res.json(json);
});

app.listen("8080", function() {
    console.log("Server running");
})