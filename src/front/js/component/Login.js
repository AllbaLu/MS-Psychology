
import React from "react";




export const Login = () => {
    return(
        <div className="container">
        <form className="login" >
            <div className="col-lg-4 mb-3">
                <label for="exampleInputEmail1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="col-lg-4 mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="******"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Verificado</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
    </div>
    )
}