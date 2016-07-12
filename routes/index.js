var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title_idex: 'Добро пожаловать!',
    title_users:'Пользователи',
    users_data_count:'0'
  });
});

module.exports = router;
