import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InterventionsPage } from "../pages/interventionsPage";


export const Navbar = () => {
		const navigate = useNavigate();

		

	return (
		<nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
			<div className="container-fluid">
				
				<a className="navbar-brand" href="#">
					<img src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-mental-health-and-psychologist-png-image_10269115.png" 
					alt="" width="40" height="44" />
					Miguel Sá Psychology
				</a>
				<div className="collapse navbar-collapse d-flex flex-row justify-content-evenly" id="navbarNavAltMarkup">
					<div className="navbar-nav mt-1  ">
						
						<div className="mx-1 "><Link to="/" className="btn btn-outline"  >Home</Link></div>
							
						<div className="mx-1"><Link to="/about" className="btn btn-outline">About</Link></div>

						<div className="mx-1"><Link to="/interventionsPage" className="btn btn-outline">Interventions</Link></div>

						<div className="mx-1" ><Link to="/contactForm" className="btn btn-outline">Contact</Link></div>	
							
					<form className="serch">
					<div className="mx-1" ><Link to="/scheduleSessions" className="btn btn-outline">Schedule a Sessions</Link></div>	

					</form>
					</div>
					{/* <div className= "d-flex">
						<a className="nav-link active" aria-current="page" >sign up</a>
						<Link to="/loginPage">Login</Link>
					</div> */}
				</div>
			</div>
		</nav>
	);
};
