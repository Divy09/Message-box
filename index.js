var express = require('express');

var path = require("path")
var router = express.Router();
var fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/submit" , function(req,res){
 const sender=req.body.senderName
 const message=req.body.message
 let content = `Sent by: ${sender}

 Message: ${message} \n`;
 fs.appendFile(path.join(__dirname, "../message.txt"), content, function (err) {
   if (err) {
     console.log(err);
     return;
   }
   res.render("submit")
  })
})
module.exports = router;
