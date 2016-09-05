var mysql = require('mysql'),
    pool = require('generic-pool'),
    async = require('async'),
    local = require('../conf/config.js');

var mysql_pool;

exports.init = function(callback) {
    var conn_props = local.config.db_config;
    mysql_pool = pool.Pool({
        name : 'mysql',
        create : function(callback) {
            var c = mysql.createConnection({
                host : conn_props.host,
                user : conn_props.user,
                password: conn_props.password,
                database: conn_props.database
            });
            callback(null, c);
        },
        destroy: function(client) { client.end();},
        max: conn_props.pooled_connections,
        idleTimeoutMillis : conn_props.idle_timeout_millis,
        log : false
    });

    exports.run_mysql_query("SELECT 1", [], function(err, results) {
        if(err != null) {
            callback(err);
            console.error("Unable to connect to DB Server. Aborting.")
        } else {
            console.log("Database initialized and connected");
            callback(null);
        }
    });
};

exports.run_mysql_query = function(query, values, callback) {
    mysql_pool.acquire(function(err, mysqlconn) {
        mysqlconn.query(query, values, function(mysqlerr, mysqlresults) {
            mysql_pool.release(mysqlconn);
            callback(mysqlerr, mysqlresults);
        });
    });
};

exports.db = function(callback) {
    console.log("aquiring");
    mysql_pool.acquire(callback);
};

exports.done = function(dbc) {
    console.log("releasing");
    mysql_pool.release(dbc);
}