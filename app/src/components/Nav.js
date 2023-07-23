import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "../styles.css"

const Nav = () => {
  const auth =localStorage.getItem("user");
  const navigate=useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/signup')
      
  }
  return (
    <div>
      <img alt="logo" className="logo" src="https://img.freepik.com/premium-photo/cute-anime-cat-character-digital-illustration-painting-artwork_743855-3361.jpg?w=2000"/>
   {auth ?   <ul className="nav-ul">
        <li>
          <Link to="/">Proudcts</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
          <Link to="/profile">Profile </Link>
        </li>
        <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link></li>

        {/* <li><Link onClick={logout} to="/signup">Logout({JSON.parse(auth).name})</Link> </li> */}
        {/* agar user login hai to log out ka button sho n hoga */}
        {/* <li>
          {auth ?
          <Link onClick={logout} to="/signup">Logout</Link>:
          <Link to="/signup">Sign up</Link>}
          </li>
          <li>
            <Link to ="/login">Login</Link>
          </li> */}
          </ul>
          :
          <ul className="nav-ul nav-right">
          <li><Link to ="/signup">Sign up</Link></li>
            <li><Link to ="/login">Login</Link></li>
          </ul>

        }
        
       
      
    </div>
  );
};
export default Nav;
