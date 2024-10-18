import React from "react";
import { Login } from "../component/Login";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../component/RegisterUser";




export const LoginPage = () => {
    const navigate = useNavigate("");

    return(
        <div>

            <Login />
            
        </div>
    )
}