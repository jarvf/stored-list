var express = require('express');
var router = express.Router();
const Item = require('../models/Item'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const items = await Item.find().lean(); 

    res.render('index', {
      title: "Tasks and Such",
      items: items
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
