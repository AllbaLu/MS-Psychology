import React from "react";




export const Login = () => {


    return(

        <div className="container mt-5">
        <form className="form-control login" >
            <div className="col-lg-6 mx-auto mb-3">
                <label for="exampleInputEmail1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                
            </div>
            <div className="col-lg-6 mx-auto mb-3">
                <label for="exampleInputPassword1" className="form-label"></label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="******"/>
            </div>
            <div className="form-check ms-5 ">
                <input type="checkbox" className="form-check-input mx-auto" id="exampleCheck1"/>
                <label className="form-check-label " for="exampleCheck1"></label>
            </div>
            <button type="submit" className="btn btn-primary">Sent</button>
    </form>
    </div>
    )
}