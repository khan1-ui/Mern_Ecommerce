const mongoose = require('mongoose')
const UserDataSchema = mongoose.Schema({
    email:{type:String , unique:true,require:true,lowercase:true},
    otp:{type:String , required:true}
},{timeStamps:true,versionKey:false})
const UsersModel = mongoose.model('users',UserDataSchema)
module.exports = UsersModel
