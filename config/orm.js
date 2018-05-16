var connection = require("./connection");


var orm = {
    findAll: function (table, orderByCol, cb) {
        var queryString = "SELECT * FROM ?? ORDER BY " + orderByCol;
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    findByMethod: function (table, method, cb) {
        var queryString = "SELECT * FROM ?? WHERE method =" + method;
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    findOne: function (table, condition, cb) {
        var queryString = "SELECT * FROM ?? WHERE " + condition;
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, strColVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + strColVal + " WHERE " + condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
};

module.exports = orm;