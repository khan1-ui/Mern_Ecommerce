const mongoose = require('mongoose')
const InvoiceDataSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    payable:{type:mongoose.Schema.Types.ObjectId , unique:true},
    cus_details:{type:String , required:true},
    ship_details:{type:String , required:true},
    tran_id:{type:String , required:true},
    val_id:{type:String , required:true},
    delivery_statut:{type:String , required:true},
    payment_status:{type:String , required:true},
    total:{type:String , required:true},
    vat:{type:String , required:true}

},{timeStamps:true,versionKey:false})
const InvoiceModel = mongoose.model('invoices',InvoiceDataSchema)
module.exports = InvoiceModel