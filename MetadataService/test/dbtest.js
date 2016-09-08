var assert = require('assert');
var db = require('../db/db');
describe('db', function() {
  describe('#run_mysql_query()', function() {
    it('Executed query', function() {
    db.init(function(err, results) {
 console.log("Hello");
    });

    db.db(function(err, dbclient) {
        console.log("DB")
        dbclient.query("select sitename from sites", [], function(err, results) {
          console.log("Hello1");
          assert.equal(1, rows.length);
      });
    })

    });
  });
});