const router=require('express').Router();
const Medicine=require('../modals/medicines');
const passport=require('passport');



router.get('/all',passport.authenticate('jwt',{session:false}),(req,res,next)=>{

    let user=req.user;
    if(user){
        Medicine.getAllMedicines((err,results)=>{
            if(err) {return res.json({success: false, msg: "Something went wrong!"});}
            return res.json({success:true, medicines: results});
        });
    }else{
        res.redirect('/');
    }

})




router.get('/all/:medicineId',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let medicineId=req.params.medicineId;
    let user=req.user;
    if(user){
        Medicine.getContentMedicine(medicineId,(err,medicine)=>{
            if(err) {return res.json({success: false, msg: "Something went wrong!"});}
            return res.json({success:true, medicine: medicine});
        });
    }else{
        res.redirect('/');
    }
})

router.put('/update/:medicineId',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let medicineId=req.params.medicineId;
    let newMedicine=req.body;
    
    let user=req.user;
    if(user){
        Medicine.updateMedicine(medicineId,newMedicine,(err,medicine)=>{
            if(err) {return res.json({success: false, msg: "Something went wrong!"});}
            return res.json({success:true, medicine: medicine});
        });
    }else{
        res.redirect('/');
    }
})

router.delete('/delete/:medicineId',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let medicineId=req.params.medicineId;
    let user=req.user;
    if(user){
        Medicine.deleteMedicine(medicineId,(err,medicine)=>{
            if(err) {return res.json({success: false, msg: "Something went wrong!"});}
            return res.json({success:true, medicine: medicine});
        });
    }else{
        res.redirect('/');
    }
})




module.exports=router;