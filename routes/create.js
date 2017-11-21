const router=require('express').Router();
const Medicine=require('../modals/medicines');
const passport=require('passport');

router.post('/medicine',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    let newMedicines=new Medicine({
        imageUrl:req.body.imageUrl,
        name:req.body.name,
        exportedDate:req.body.exportedDate,
        importedDate: req.body.importedDate,
        expiredDate: req.body.expiredDate,
        quantity:req.body.quantity,
        country:req.body.country,
        storedPlace:req.body.storedPlace
    });

    let user=req.user;
    if(user){
        Medicine.addMedicine(newMedicines,(err,result)=>{
            if(err) return res.json({success:false, msg:"failed to create an Medicine " +err })
            res.json({success:true,msg:"Create an Medicine succesfully!"});
        });
    }else{
        res.redirect('/');
    }
})

module.exports=router;