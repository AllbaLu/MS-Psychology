import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";




export const Login = () => {
    const {store, actions} = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        if(store.token) {
            navigate("/");
        }
    }, [store.token, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.login(email, password);
    }


    return(

        <div className="container mt-5">
            {!store.token? (
                <form className="form-control login" onSubmit={handleSubmit} >
                    <div className="col-lg-6 mx-auto mb-3">
                        <label for="exampleInputEmail1" className="form-label"></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                        
                    </div>
                    <div className="col-lg-6 mx-auto mb-3">
                        <label for="exampleInputPassword1" className="form-label"></label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="******"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Sent</button>
                </form>
            ): null}
        </div>
    )
}