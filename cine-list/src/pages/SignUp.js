import React from "react";
import {Link} from "react-router-dom";
import '../style/SignUp.css';


const SignUp = () =>{

    return(
        <>
        <div className="page-signup">
            <form className="form-signup">
                <h3 className="font-signup">Sign Up</h3>

                <label className="label-signup" for="username">Username</label>
                <input className="input-signup" type="text" placeholder="Username" id="username"/>

                <label className="label-signup" for="email">E-mail</label>
                <input className="input-signup" type="text" placeholder="E-mail" id="email"/>

                <label className="label-signup" for="phone">Phone Number</label>
                <input className="input-signup" type="text" placeholder="Phone Number" id="phone"/>

                <label className="label-signup" for="password">Password</label>
                <input className="input-signup" type="password" placeholder="Password" id="password"/>

                <label className="label-signup" for="password-confirm">Confirm Password</label>
                <input className="input-signup" type="password" placeholder="Password" id="password-confirm"/>

                <Link to="/">
                    <button className="button-register">Register</button>
                </Link>
        
            </form>
        </div>

        </>
    );
};

export default SignUp;