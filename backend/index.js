const express = require("express");
// const mongoose = require("mongoose");
// require("./db/config.js");
require('./db/config');
const user = require("./db/config");

const app = express();
app.post("/register",(req,resp)=>{
    resp.send("api is in progress")
});

// const connectDB = async () => {
//   try { 
//     await mongoose.connect("mongodb://127.0.0.1:27017/ecom1");
//     console.log("Connected to MongoDB");

//     const productSchema = new mongoose.Schema({
//       name: String, // Example field, you can add more fields as needed
//     });

//     const  products = mongoose.model("product", productSchema);
//     const data = await products.find();
//     console.warn(data);
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// connectDB();

app.listen(6>000, () => {
  console.log("Server is running on port 5000");
});
