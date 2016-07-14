var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
        res.render('newuser',{
            title: "Add new user"
        });
});



module.exports = router;