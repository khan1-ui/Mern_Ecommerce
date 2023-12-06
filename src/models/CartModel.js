const mongoose = require('mongoose')
const CartDataSchema = mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    userID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    color:{type:String , required:true},
    price:{type:String , required:true},
    qty:{type:String , required:true},
    size:{type:String , required:true}
},{timeStamps:true,versionKey:false})
const CartModel = mongoose.model('carts',CartDataSchema)
module.exports = CartModel