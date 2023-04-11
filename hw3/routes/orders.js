//Ian Thompson

var express = require('express');
var router = express.Router();

/* Sends post to server side */
router.post('/', function(req, res, next) {
    res.send('[{"topping":"Plain", "quantity":2},{"topping":"Chocolate", "quantity":7}, {"topping":"Cherry", "quantity":1}]');
});

module.exports = router;
