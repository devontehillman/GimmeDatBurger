const orm = require('../config/orm');

const burger = {
    all(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    create(burgerName, callback) {
      orm.insertOne('burgers', burgerName, false, (res) => callback(res));
    },
    update(condition, id, callback) {
      orm.updateOne('burgers', 'devoured', condition, id ,(res) => callback(res));
    },
    delete(condition, cb) {
      orm.deleteOne('burgers', condition, (res) => cb(res));
    }
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
  
//orm.selectAll('burgers_db.burgers');

//orm.insertOne('burgers_db.burgers','Juicy Burger',false);

//orm.updateOne('burgers_db.burgers','devoured', true, 2)
