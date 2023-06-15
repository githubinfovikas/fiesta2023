let mongoose = require('mongoose');


let registeration = new mongoose.Schema({
    event:{type:String,required:true},
    leaderName:{type:String,required:true},
    leaderUserID:{type:String,required:true},
    email:{type:String,required:true},
    collegeName:{type:String, required:true},
    mobileNo1:{type:String ,required:true},
    mobileNo2:{type:String ,required:true},
    memberNameAndUserID:[]

}); 

let registerationModel = mongoose.model('registeration',registeration);
module.exports = registerationModel;
