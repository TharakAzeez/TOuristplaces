let express=require("express");
let cors=require('cors');
let bodyparser=require('body-parser')
let db=require("./config/dbConfig");
let clientRouter=require("./router/clientRouter");

let app=express();
db.dbConnection;
app.use(express.json());

app.use(bodyparser.json()) ;
app.use(cors({
    origin:"*",
    methods:['GET','PUT','POST','DELETE']
}))

app.get("/get",(request,response)=>{console.log("api is worrking bro");
response.send("api is working")})


app.use("",clientRouter);

app.listen(9090,()=>console.log("application running on 9090"));
