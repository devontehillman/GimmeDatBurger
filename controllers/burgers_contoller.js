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
      //console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  router.put('/api/burgers/:id', (req, res) => {
    const id = req.params.id;
    let condition = req.body.devoured
    if (condition === 'true') {
    condition = false
    }else{
      condition = true
    }
    burger.update(condition, id)
    res.end()
    // burger.update(
    //   {
    //     devoured: req.body.devoured,
    //   },
    //   condition,
    //   (result) => {
    //     if (result.changedRows === 0) {
    //       // If no rows were changed, then the ID must not exist, so 404
    //       return res.status(404).end();
    //     }
    //     res.status(200).end();
    //   }
    // );
  });

module.exports = router;