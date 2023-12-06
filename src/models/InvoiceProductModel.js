const mongoose = require('mongoose')
const InvoiceProductDataSchema = mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    invoiceID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    productID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    qty:{type:String , required:true},
    price:{type:String , required:true},
    color:{type:String , required:true},
    size:{type:String , required:true}
},{timeStamps:true,versionKey:false})
const InvoiceProductModel = mongoose.model('invoicesProduct',InvoiceProductDataSchema)
module.exports = InvoiceProductModel