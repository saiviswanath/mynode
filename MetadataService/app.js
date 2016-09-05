var express = require("express"),
db = require("./db/db"), errorhelper = require("./utils/errorhelper"), service = require("./service/service");
var app = express();

app.get("/v1/metadata/:type", function(req, res) {
    var type = req.params.type;
    service.getMetadataByType(type, function(err, results) {
        if (err) {
            var error = {
                "error" : err.message
            };
            res.json(error);
        } else {
            res.json(results);
        }
    });
});

app.get("/v1/metadata/:type/:name", function(req, res) {
    var type = req.params.type;
    var name = req.params.name;
    service.getMetadataByTypeAndName(type, name, function(err, results) {
        if (err) {
            var error = {
                "error" : err.message
            };
            res.json(error);
        } else {
            res.json(results);
        }
    });
});

db.init(function(err, results) {
if (err) {
    console.log(err.message);
    errorhelper.UnexpectedError(function(error) {
        console.log(error);
    });
    process.exit(-1);
} else {
    app.listen(8080, function(){
        console.log("Server Listening...");
    });
}
});
