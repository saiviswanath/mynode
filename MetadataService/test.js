var async = require('async');
var xyz = function(callback) {
    console.log("Test1");

    function abc(callback) {
        xyz(callback);
    }

    function xyz(callback) {
        callback(null, 90);
    }
async.waterfall([
function(cb) {
cb(null);
},

function(cb) {
    cb(null, 60);
},

function(r, cb) {
    console.log(r);
    cb(null, 20);
},

function(s, cb) {
    if (s == 20) {
        abc(cb);
    } else {
        cb(null, 30);
    }
}


], function(err, results) {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
});
};

xyz();