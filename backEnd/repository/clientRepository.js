let clientModel=require('../model/clientModel');
const storeClientInfo=(result)=>{

    console.log("client repository user" ,result)
    
    // console.log(result["name"]);
     var client =  new clientModel({"Name":result["name"],"Email":result["gmail"],"Cgpa":result["cgpa"]});

     client.save();

     return client;

    // return clientModel.find(); yess

};


module.exports={storeClientInfo};