import React from "react";



export const RegisterUser = () => {
    return (
        <div className= "container">
        <form className="row g-3">
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label"></label>
                <input type="name" className="form-control" id="inputName" placeholder="Name"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label"></label>
                <input type="lastname" className="form-control" id="inputLastName" placeholder="Lastname"/>
            </div>
            <div className="d-flex justify-content-evenly">
            <div className="col-md-4">
                <label for="inputEmail4" className="form-label"></label>
                <input type="birthdate" className="form-control" id="inputBirthDate" placeholder="Birthdate"/>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label"></label>
                    <select id="inputState" className="form-select" placeholder="Gender">
                        <option >Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>

                    </select>
            </div>
            </div>
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label"></label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="example@example.com"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label"></label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="******"/>
            </div>         
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
        </form>
        </div>
    )
}