var orm = require("../config/orm.js");

//sets all queries to the chefs table


var chef = {
    findAll: function (orderByCol, cb) {
        orm.findAll("chefs", orderByCol, function (res) {
            cb(res);
        });
    },

    findSome: function (condition, orderByCol, cb) {
        orm.findSome("chefs", condition, orderByCol, function (res) {
            cb(res);
        });
    },

    findOne: function (condition, cb) {
        orm.findOne("chefs", condition, function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("chefs", cols, vals, function (res) {
            cb(res);
          });
    },


    update: function (strColVal, condition, cb) {
        orm.update("chefs", strColVal, condition, function(res) {
            cb(res);
        });
    },
    
    delete: function(condition, cb) {
        orm.delete("chefs", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = chef;