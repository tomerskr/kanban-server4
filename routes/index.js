var express = require('express');
var router = express.Router();
var katbanBoard = require('../items.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        data: katbanBoard 
                    });
});

module.exports = router;
