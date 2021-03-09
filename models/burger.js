const orm = require('../config/orm');

// this file will call orm functions to create specific input for the user
// orm
const burger = {
    all(cb) {
      orm.selectAll('burgers_db.burgers', (res) => cb(res));
    },
    // // The variables cols and vals are arrays.
    // create(cols, vals, cb) {
    //   orm.create('burgers', cols, vals, (res) => cb(res));
    // },
    update(condition, id, cb) {
      orm.updateOne('burgers_db.burgers', 'devoured', condition, id ,(res) => cb(res));
    },
    // delete(condition, cb) {
    //   orm.delete('burgers', condition, (res) => cb(res));
    // },
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
  
//orm.selectAll('burgers_db.burgers');

//orm.insertOne('burgers_db.burgers','Juicy Burger',false);

//orm.updateOne('burgers_db.burgers','devoured', true, 2)