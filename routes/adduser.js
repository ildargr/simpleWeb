var express = require('express');
var router = express.Router();

router.post('/', function(req,res){
    var db = req.db;

    var userName = req.body.username;
    var userEmail = req.body.useremail;

    var collection = db.get('usercollection');

    collection.insert({
        "username":userName,
        "email": userEmail
    }, function(err,doc){
        if(err){
            res.send("There is a problem adding the information to the database");
        }else{
            res.redirect("userlist");
        }
    });
});



module.exports = router;