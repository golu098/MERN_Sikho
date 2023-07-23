// console.log("hi");
const cors = require("cors");
const express = require('express');
require('./db/config');
const User = require("./db/User");
const mongodb=require('mongodb');
const dbConnect=require('./mongodb');
//18
const Product=require("./db/Product");
// @@@@@@@@@ middleware


const app = express();
app.use(cors());
// to fecth the data from postman (express works here)
app.use(express.json());
app.post("/register", async (req, resp) => {    // jo data postman m show ho rha tha usko db m store krwana hai
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    // delete result.password;// htne ke liye pasword
    delete result;
    // resp.send(req.body)                  // ye postmn me dekhne ke liye tha
    resp.send(result)

})

// 14
app.post("/login", async (req, resp) => {
    // resp.send(req.body);
    console.log(req.body);
  
    if (req.body.password && req.body.email) {
      let user = await User.findOne(req.body).select("-password");
  
      if (user) {
        resp.send(user);
      } else {
        resp.send({ result: "No user Found" });
      }
    } else {
      resp.send({ result: "No user Found" });
    }
  });

  app.post("/add-product", async (req, resp) => {    // jo data postman m show ho rha tha usko db m store krwana hai
    let product = new Product(req.body);
    let result = await product.save();
resp.send(result)
  });
  app.get("/products", async (req, resp) => {    // jo data postman m show ho rha tha usko db m store krwana hai
    // let products = new Product(req.body);
    const products = await Product.find();
if(products.length>0){
resp.send(products)
}else{
  resp.send({result:"no products found"})
}
  });
  //24
  app.delete("/product/:id",  async(req, resp) => {    // jo data postman m show ho rha tha usko db m store krwana hai
    // let products = new Product(req.body);
    console.log(req.params.id );
    const product = await dbConnect()
    const result= await product.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
   
    // const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
  });


// const mongoose=require('mongoose');
// const { createProduct } = require('./controller/Product');
// main().catch(err=>console.log(err));

//     async function main(){
//         await mongoose.connect('mongodb://127.0.0.1:27017/test'); 
//         console.log('database connected')
//     }
//     server.get("/",(req,res)=>{
//         res.json({status:"sucees api path"})
//     })

app.listen(5000);