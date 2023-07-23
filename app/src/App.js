import "./styles.css";

import React from "react";
// import "./style.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
 import PrivateComponent from "./components/PrivateComponent";
 import AddProduct from "./components/AddProduct";
 import ProductList from "./components/ProductList";
 import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct/>}  />
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/profile" element={<h1> pArofile page</h1>} />
          </Route>


          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <h1> home</h1>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
