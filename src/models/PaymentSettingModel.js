const mongoose = require('mongoose')
const PaymentDataSchema = mongoose.Schema({
    store_ID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    store_Password:{type:mongoose.Schema.Types.ObjectId , unique:true},
    currency:{type:String , required:true},
    success_url:{type:String , required:true},
    fail_url:{type:String , required:true},
    cancel_url:{type:String , required:true},
    inp_url:{type:String , required:true},
    init_url:{type:String , required:true}
},{timeStamps:true,versionKey:false})
const PaymentModel = mongoose.model('paymentSetting',PaymentDataSchema)
module.exports = PaymentModel