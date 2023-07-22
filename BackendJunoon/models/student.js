let mongoose = require('mongoose');


let student = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phoneNo:{type:String,required:true},
    collegeName:{type:String, required:true},
    document:{type:String,required:true},
    documentID:{type:String ,required:true},
    tshirt:{type:String,required:true},
    userID:{type:String, required:true},
    paid:{type:Boolean, default:false},
    paidOnlineEvent:{type:Boolean,default:false},
    trID:{type:String},
    image: { type:String },
})

let studentModel = mongoose.model('students',student);
module.exports = studentModel;






