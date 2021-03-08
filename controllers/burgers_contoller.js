const express = require('express')
const burger = require('../models/burger')
const router = express.Router()

//orm.selectAll('burgers_db.burgers');

//orm.insertOne('burgers_db.burgers','Juicy Burger',false);

//orm.updateOne('burgers_db.burgers','devoured', true, 2)

router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });


module.exports = router;