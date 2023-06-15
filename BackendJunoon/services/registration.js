let registerationModel = require('../models/registerationDetails');

let insertData =  async(data)=>{
    return await registerationModel.insertMany(data);
}
let deleteOneByRegistrationId = async(id)=>{
    return await registerationModel.deleteOne({leaderUserID:id});
}
let findOneData = async(id)=>{
    return await registerationModel.findOne({leaderUserID:id});
}
let findOneAndUpdate = async(id,data)=>{
    return await registerationModel.findByIdAndUpdate({leaderUserID:id},{$set:data});
}

module.exports = {
    insertData,
    deleteOneByRegistrationId,
    findOneData,
    findOneAndUpdate,
}