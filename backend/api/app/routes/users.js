var express = require('express');
var router = express.Router();
var userModel =require('../models/user')
const bcrypt = require('bcrypt');




function checkEmail(req,res,next){
  var email=req.body.Email;
  var checkexitemail=userModel.findOne({email:email});
  checkexitemail.exec((err,data)=>{
 if(err) throw err;
 if(data){
  return res.status(200).json({
    msg:"Email Already Exits",
    results:data
});
 }
 next();
  });
}


/* GET users listing. */
router.get('/', function(req, res, next) {

  var userDetails = new userModel({
    name:'Raj',
    email:'rajshukla@gmail.com',
    password:'password@123'
  })
  
  userDetails.save(function(err,req1) {
    if(err) throw err;
    res.render('index', { title: 'Users Data' });
  })

});

router.post('/register',checkEmail,function(req, res,next) {
    console.log(req.body)
    bcrypt.hash(req.body.password,10,function(err,hash) {
        if(err) {
            res.status(400).json({
                msg:'Something went wrong!'
            })
        } else{
            var userDetails = new userModel({
                username:req.body.username,
                email:req.body.email,
                password:hash,
                phone:req.body.phone,
                role:'Client'
            })
            console.log(userDetails)
            userDetails.save().then(resResult=>{
                res.status(201).json({
                    msg:'Inserted Successfully',
                    results:resResult
                })
            }).catch(err=>{
                res.json(err)
            })
        }
    })
})

router.post("/login",function(req,res,next){

    var email=req.body.email;
    userModel.find({email:email})
    .exec()
    .then(user=>{
        if(user.length<1){
            res.status(200).json({
              msg:"Auth Failed",
              UserData:'',
              status:'error'
            });
        }else{
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
               if(err){
                res.json({
                  msg:"Auth Failed",
                  UserData:'',
                  status:'error'
                });
               }
               if(result){
                res.status(200).json({
                  msg:"User Login Successfully",
                    UserData:user,
                    status:'success'
                });
               }else{
                res.json({
                  msg:"Auth Failed",
                  UserData:'',
                  status:'error'
                });
               }
            });
        
    }
    })
    .catch(err=>{
        res.json({
            error:err
        });
    })
  
  
    });
  
  



module.exports = router;