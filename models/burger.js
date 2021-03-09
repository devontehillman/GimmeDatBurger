const orm = require('../config/orm');

// this file will call orm functions to create specific input for the user
// orm
const burger = {
    all(cb) {
      orm.selectAll('burgers_db.burgers', (res) => cb(res));
    },
    create(burgerName, callback) {
      orm.insertOne('burgers_db.burgers', burgerName, false, (res) => callback(res));
    },
    update(condition, id, callback) {
      orm.updateOne('burgers_db.burgers', 'devoured', condition, id ,(res) => callback(res));
    },
    delete(condition, cb) {
      orm.deleteOne('burgers_db.burgers', condition, (res) => cb(res));
    }
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
  
//orm.selectAll('burgers_db.burgers');

//orm.insertOne('burgers_db.burgers','Juicy Burger',false);

//orm.updateOne('burgers_db.burgers','devoured', true, 2)