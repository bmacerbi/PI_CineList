import React from "react";
import {Link} from "react-router-dom";
import '../style/Login.css';

 /**
 * Exibe a página do Login com suas respectivas funcionalidades
 * @return Página Login
 */
const Login = () =>{
    return(
        <>
        <div className="page-login">
            <h1 className="title">CineList</h1>
            <form className="form-login">
                <h3 className="font-login">Login</h3>

                <label className="label-login" for="username">Username</label>
                <input className="input-login" type="text" placeholder="Email or Phone" id="username"/>

                <label className="label-login" for="password">Password</label>
                <input className="input-login" type="password" placeholder="Password" id="password"/>

                <Link to="/Catalog">
                    <button className="button-login">Log In</button>
                </Link>
                <div className="info-signup">
                    <p>Don't have an account?⠀</p>
                    <Link to="/SignUp">
                        <button className="button-signup">Sign up</button>
                    </Link>
                    
                </div>
            </form>
        </div>
        </>
    );
};

export default Login;