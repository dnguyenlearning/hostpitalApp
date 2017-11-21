const express=require('express');
const router=express.Router();
const User=require('../modals/users');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');


router.get('/',(req,res,next)=>{
    res.json({invalid:'true'});
})


router.post('/register',(req,res,next)=>{
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
    })
    User.getUserByUsernameOrEmail(newUser,(err,result)=>{
        if(result) return res.json({success:false, msg:'username or email has already existed!'});
        User.addUser(newUser,(err,user)=>{
            if(err) res.json({success:false, msg:"falied to register User"});
            else res.json({success:true,msg:"User registered"});
        })
    })
})


router.post('/authenticate',(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;

    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({success:false, msg:"User Not Found!"});

        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token=jwt.sign({data:user},config.secret,{
                    expiresIn:604800 //1 week
                });

                res.json({
                    success:true,
                    token: 'JWT '+token,
                    user:{
                        id:user._id,
                        name:user.name,
                        email:user.email,
                        username:user.username
                    }
                });
            }else{
                return res.json({success:false,msg:"Wrong password"});
            }
        })
    })
})

router.get('/:value',(req,res,next)=>{
    if(req.params.value){
        User.checkUserExist(req.params.value,(err,result)=>{
        if(result) return res.json({success:false, msg:"username already exist"});
        return res.json({success:true,msg:"you can use this username"});
        })
    }
})


router.get('/profile',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    res.json({user:req.user});
})



module.exports=router;