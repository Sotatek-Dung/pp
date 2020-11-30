var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/private', function(req, res, next) {
    res.json('ok')
})
router.get('/fail', function(req, res, next) {
    res.json('fail')
})
module.exports = router;