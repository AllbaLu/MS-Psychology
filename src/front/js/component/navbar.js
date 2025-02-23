import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../image/brain-rounded.png";


export const Navbar = () => {
		const navigate = useNavigate();

		

	return (
		<nav className="navbar navbar-expand-sm  " >
			<div className="container-fluid">
				
			<h1 className="navbar-brand text-dark fs-1 ms-4" >
					{/* <img src={logo} 
					 width="50" height="45" /> */}
					
					
					<em><strong> Miguel Sá Psychology</strong></em>
			</h1>
				
				<div className="collapse navbar-collapse d-flex flex-row justify-content-evenly" id="navbarNavAltMarkup">
					<div className="navbar-nav mt-1 text-dark  ">
						
						<div className="mx-1 "><Link to="/" className="btn text-info"  >Home</Link></div>
							
						<div className="mx-1"><Link to="/about" className="btn text-info">About</Link></div>

						<div className="mx-1"><Link to="/interventionsPage" className="btn text-info">Interventions</Link></div>

						<div className="mx-1" ><Link to="/contactForm" className="btn text-info">Contact</Link></div>	
							
					
					{/* <div className="mx-1" ><Link to="/scheduleSessions" className="btn btn-outline">Schedule Sessions</Link></div>	 */}
					<div className="dropdown">
						<button
							className="btn btn-info dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Schedule Sessions
							
						</button>
						<ul className="dropdown-menu">
							<li>
							<Link  className=" dropdown-item visible-dropdown-item" to="/scheduleSessions">
								Session 15 minutes
							</Link>
							</li>
							<li>
							<Link  className=" dropdown-item visible-dropdown-item" to="/scheduleSessions">
								Full Session
							</Link>
							</li>
						</ul>
						</div>
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
