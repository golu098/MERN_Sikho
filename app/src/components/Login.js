import React, { useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"

const Login =()=>{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      const auth =localStorage.getItem("user");
      if(auth){
        navigate('/')
      }
    })
    const handleLogin=async()=>{
        console.warn("email,password",email,password)
        let result= await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
              'Content-Type':'application/json'
            }
                });
                result=await result.json();
                console.warn(result)
                if(result.name){
                    localStorage.setItem("user",JSON.stringify(result));
                    navigate("/")
                }
                else{
                    alert("please enter details")
                }
    }

    return(
        <div className="login">
            <h1>Login</h1>
      
      
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
      <button onClick={handleLogin} className="appButton" type="submit">
        submit
      </button>

        </div>
    )
}
export default Login;