let clientController=require('../controller/clientController');
let express=require("express");
let router=express.Router();
router.post('/register',clientController.signUp)


module.exports=router;
