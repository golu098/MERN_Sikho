// import React from "react";
import React, { useState, useEffect} from "react";
import "../styles.css"
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // kese page pe jane ke liye after pressing something
  const navigate=  useNavigate();

  // const navigate =useNavigate();

  // is se hoga ke user signup hai to osignup page m nhi jaa ksta hai
  useEffect(()=>{
    const auth =localStorage.getItem("user");
    if(auth){
      navigate('/')
    }
  })

  // api se data ko postman ke through db me storag ekr rha hai
  const collectData = async() => {
    console.warn(name, email, password);
   let result= await fetch('http://localhost:5000/register',{
method:'post',
body:JSON.stringify({name,email,password}),
headers:{
  'Content-Type':'application/json'
},
    })
    result=await result.json()
    console.warn(result);
    // after click on submit redirect to desire page
    navigate('/')
    // store data in locl storage
    localStorage.setItem("user",JSON.stringify(result));
    // if(result){
    //   
    // }
  }

  return (
    <div className="register">
      <h1>register</h1>
      <input
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <input
        className="inputBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // <-- Here is the corrected line
        type="text"
        placeholder="Enter email"
      />
      <input
        className="inputBox"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Enter Password"
      />
      <button onClick={collectData} className="appButton" type="submit">
        submit
      </button>
    </div>
  );
};

export default SignUp;
