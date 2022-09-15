let mongoose=require('mongoose');

let clientSchema=mongoose.Schema({
    Name:String,
    Email:String,
    Cgpa:String
})
let clientModel=mongoose.model('client',clientSchema);

module.exports=clientModel;