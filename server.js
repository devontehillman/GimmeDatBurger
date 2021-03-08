const orm = require('./config/orm.js')

orm.selectAll('burgers_db.burgers');

//orm.insertOne('burgers_db.burgers','Juicy Burger',false);

//orm.updateOne('burgers_db.burgers','devoured', true, 2)