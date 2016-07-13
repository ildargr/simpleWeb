var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Пользователи',
    message:'количество',
    users_count:'0'
  });
});

module.exports = router;
