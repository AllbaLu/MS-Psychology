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
						
							<Link to="/">Home</Link>
							<a className="nav-link active" aria-current="page" >About</a>

							<Link to="/interventionsPage">Interventions</Link>
							<Link to="/contactForm">Contact</Link>
					<form className="serch">
						<button className="btn btn-outline-success" type="submit">Schedule a Session</button>
					</form>
					</div>
					<div className= "d-flex">
						<a className="nav-link active" aria-current="page" >sign up</a>
						<Link to="/loginPage">Login</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
