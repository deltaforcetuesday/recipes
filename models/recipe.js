var orm = require("../config/orm.js");

//sets all queries to the recipe table


var recipe = {
    findAll: function (orderByCol, cb) {
        orm.findAll("recipes", orderByCol, function (res) {
            cb(res);
        });
    },

    findSome: function (condition, orderByCol, cb) {
        orm.findSome("recipes", orderByCol, function (res) {
            cb(res);
        });
    },

    findOne: function (condition, cb) {
        orm.findOne("recipes", condition, function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("recipes", cols, vals, function (res) {
            cb(res);
          });
    },


    update: function (strColVal, condition, cb) {
        orm.update("recipes", strColVal, condition, function(res) {
            cb(res);
        });
    },
    
    delete: function(condition, cb) {
        orm.delete("recipes", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = recipe;