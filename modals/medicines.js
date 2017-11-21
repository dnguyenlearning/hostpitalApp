const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const config=require('../config/database');

const MedicineSchema=mongoose.Schema({
    imageUrl:{
        type:String,
        default:'assets/images/ok.jpg'
    },
    name:{
        type:String,
        required:true,
    },
    exportedDate:{
        type:Date,
        required:true,
    },
    importedDate:{
        type:Date,
        required:true,
    },
    expiredDate:{
        type:Date,
        required:true,
    },
    quantity:{
        type:Number,
        require:true
    },
    country:{
        type:String,
        require:true,
    },
    storedPlace:{
        type:String,
        require:true,
    }
});

const Medicine=module.exports=mongoose.model('medicines',MedicineSchema);

module.exports.addMedicine=(newMedicine,callback)=>{
    newMedicine.save(callback);
}

module.exports.getAllMedicines=(callback)=>{
    Medicine.find({},callback).sort({_id:-1});
}

module.exports.getContentMedicine=(medicineId,callback)=>{
    Medicine.findOne({_id:medicineId},callback);
}

module.exports.updateMedicine=(id,newMedicine,callback)=>{
    Medicine.findOneAndUpdate({_id:id},{$set:newMedicine},callback);
}
module.exports.deleteMedicine=(id,callback)=>{
    Medicine.remove({_id:id},callback);
}
