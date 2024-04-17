import React from "react";
import './CSS/login_page.css';
import { Link } from "react-router-dom";
function Login_page(){
    return(
    <div>
        <div className="box-2">
            <h1>Login</h1><br/>
            <input type="email" placeholder="Email Id"/><br/>
            <input type="password" placeholder="Password"/><br/>
            <Link to="/" style={{backgroundColor:"transparent"}}> <button className="sign-btn-2">Sign Up</button></Link>
            <Link to="/FoodZone" style={{backgroundColor:"transparent"}}><button className="login-btn-2" >Login</button></Link>
        </div>
    </div>
    )
}
export default Login_page;