import React from "react";
import './CSS/sign_page.css';
import { Link } from "react-router-dom";
function Sign_up_page(){
    return(
        <div className="box">
            <h1>Sign Up</h1><br/>
            <input type="text" placeholder="Name"/><br/>
            <input type="email" placeholder="Email Id"/><br/>
            <input type="password" placeholder="Password"/><br/>
            <Link to="/" style={{backgroundColor:'transparent'}}><button className="sign-btn">Sign Up</button></Link>
            <Link to="/Login_page" style={{backgroundColor:'transparent'}}><button className="login-btn">Login</button></Link>
        </div>
    )
}
export default  Sign_up_page;