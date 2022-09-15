let mongoose=require('mongoose');
let url="mongodb+srv://tharak:Tharak2001@cluster0.3snap.mongodb.net/tharak?retryWrites=true&w=majority";
const dbConnection= mongoose.connect(url).then(res=>{console.log("db Connected successfully");
}).catch(res=>{console.log("db  not connected ")});