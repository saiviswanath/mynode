"use strict";
/// <reference path="../typings/globals/express/index.d.ts" />
var express = require("express");
var app = express();
app.get("/v1/test", function (req, res) {
    res.json("{\"test\" : \"test\"}");
});
app.listen(8080, function () {
    console.log("Server Listening...");
});
//# sourceMappingURL=service.js.map