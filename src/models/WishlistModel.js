const mongoose = require('mongoose')
const WishesDataSchema = mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId , unique:true},
    userID:{type:mongoose.Schema.Types.ObjectId , unique:true}
},{timeStamps:true,versionKey:false})
const WishesModel = mongoose.model('wishlist',WishesDataSchema)
module.exports = WishesModel