import React from "react";
import Login from "../components/Login/Login";
import NavBar from "../components/NavBar/NavBar";
import Members from "../components/Members/Members"

function LoginPage() {
    return (
        <div>
        <NavBar><Login/></NavBar>
        <Members></Members>
        </div>
    
    )
};

export default LoginPage;