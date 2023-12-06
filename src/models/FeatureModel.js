const mongoose = require('mongoose')
const FeatureDataSchema = mongoose.Schema({
    name:{type:String , required:true},
    description:{type:String , required:true},
    img:{type:String , required:true}
},{timeStamps:true,versionKey:false})
const FeatureModel = mongoose.model('features',FeatureDataSchema)
module.exports = FeatureModel