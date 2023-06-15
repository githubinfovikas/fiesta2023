let StudentModel = require('../models/student');


let registerStudent = async(data)=>{
    return await StudentModel.insertMany(data);
}


module.exports ={
    registerStudent,
}