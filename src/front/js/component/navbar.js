import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InterventionsPage } from "../pages/interventionsPage";


export const Navbar = () => {
		const navigate = useNavigate();

		

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				
				<a className="navbar-brand" href="#">
					<img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-mental-health-and-psychologist-png-image_10269115.png" 
					alt="" width="40" height="44" />
					Miguel Sa Psychology
				</a>
				<div className="collapse navbar-collapse d-flex flex-row justify-content-evenly" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						
							<Link to="/">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</Link>
								<a className="nav-link active" aria-current="page" href="#">About</a>

							<Link to="/interventionsPage">
								<a className="nav-link active" aria-current="page" >Interventions</a>
							</Link>
							<Link to="/contactForm">
								<a className="nav-link" >Contact</a>
							</Link>
					<form className="serch">
						<button className="btn btn-outline-success" type="submit">Schedule a Session</button>
					</form>
					</div>
					<div className= "d-flex">
						<a className="nav-link active" aria-current="page" >sign up</a>
						<Link to="/loginPage">
							<a className="nav-link" >Login</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
