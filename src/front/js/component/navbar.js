import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
						<a className="nav-link active" aria-current="page" href="#">Home</a>
						<a className="nav-link active" aria-current="page" href="#">About</a>
						<a className="nav-link active" aria-current="page" href="#">Interventions</a>
						<a className="nav-link" href="#">Contact</a>
					<form className="serch">
						<button className="btn btn-outline-success" type="submit">Schedule a Session</button>
					</form>
					</div>
					<div className= "d-flex">
						<a className="nav-link active" aria-current="page" href="#">sign up</a>
						<a className="nav-link" href="#">Login</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
