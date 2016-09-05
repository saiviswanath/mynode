var db = require("./db"),
async = require("async"),
errorhelper = require("../utils/errorhelper");

exports.getMetadataByType = function(type, callback) {
    var dbc;
    async.waterfall([
        function(cb) {
            db.db(cb);
        },

        function(dbclient, cb) {
            dbc = dbclient;
            if(type === "Site") {
                dbclient.query("select sitename, pattern from sites", [], cb);
            } else if (type === "Category") {
                dbclient.query("select categoryname, pattern from Categories", [], cb);
            } else if (type === "Event") {
                dbclient.query("select eventname, pattern from Events", [], cb);
            } else if (type === "Searchterm") {
                dbclient.query("select termname, pattern from searchterms", [], cb);
            } else {
                errorhelper.MetadataType_Not_Found(type, cb);
            }
        },

        function(rows, fields, cb) {
            if (!rows || rows.length == 0) {
                cb(null, []);
            } else {
                cb(null, rows);
            }
        }
    ], function(err, results) {
        if(dbc) {
            db.done(dbc);
        }

        if (err) {
            callback(err);
        } else {
            callback(null, results);
        }
    });
};

exports.getMetadataByTypeAndName = function(type, name, callback) {
    var dbc;
    async.waterfall([
        function(cb) {
            db.db(cb);
        },

        function(dbclient, cb) {
            dbc = dbclient;
            if(type === "Site") {
                dbclient.query("select sitename, pattern from sites where sitename=?", [name], cb);
            } else if (type === "Category") {
                dbclient.query("select categoryname, pattern from Categories where categoryname=?", [name], cb);
            } else if (type === "Event") {
                dbclient.query("select eventname, pattern from Events where eventname = ?", [name], cb);
            } else if (type === "Searchterm") {
                dbclient.query("select termname, pattern from searchterms where termname = ?", [name], cb);
            } else {
                errorhelper.MetadataType_Not_Found(type, cb);
            }
        },

        function(rows, field, cb) {
            if (!rows || rows.length == 0) {
                cb(null, []);
            } else {
                cb(null, rows);
            }
        }
    ],
    function(err, results) {
        if (dbc) {db.done(dbc);}
        if (err) {
            callback(err);
        } else {
            callback(null, results);
        }
    });
}

