let clientRepository = require('../repository/clientRepository');
 let signUp=async(req,res)=>{
    let client=req.body;
    
    console.log("client data",client);
    try{
        
            console.log("object length",Object.keys(client).length );

        
        
        if(Object.keys(client).length !==0){ 

            console.log("controller workingg");
            let x = await clientRepository.storeClientInfo(client);

            // console.log("data from repo",result);
            res.send(x);

        }
        else{console.log("please insert  asome data");
        res.send("please insert some data");
    }

        
    }

    catch(Ex){
        res.send(Ex)
    }
}
    
module.exports={signUp}