var express = require('express');
var router = express.Router();


let dbConnect= require('../dbconfig/db-connect');


/* GET home page. */
router.get('/', function(req, res, next) {

  dbConnect.get().collection('product').find().toArray(function (err,docs) {
    res.render('shop/index', { title: 'Shopping Cart',products:docs });
  });

});

module.exports = router;
