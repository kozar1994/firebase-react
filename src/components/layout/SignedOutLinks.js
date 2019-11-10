import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/singnup">Signup</NavLink></li>
            <li><NavLink to="/singnin">Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks