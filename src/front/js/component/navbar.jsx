
import { Link, useNavigate } from "react-router-dom";
import logo from "../../image/image.png"


export const Navbar = () => {
		const navigate = useNavigate();

		

	return (
		<div className="container">

			<nav className="navbar navbar-expand-sm  " >
				<div className="container-fluid">
					
					<h1 className="navbar-brand text-dark  ms-5" >
							<img src={logo}
							alt="mentalHealth" 
							width="180" height="90" /> 												
					<p className="badge text-wrap text-dark " style={{width: "2rem", borderLeft: "solid"}}>
						Mental Health Services
					</p>
					</h1>
					
					<div className="navbar d-flex flex-row justify-content-evenly" id="navbarNavAltMarkup">
						<div className="navbar-nav text-dark  ">
							<ul className="navbar-nav d-flex flex-row">
								<li className="nav-item "><Link to="/" className="btn text-info" >Home</Link></li>									
								<li className="nav-item"><Link to="/about" className="btn text-info">About</Link></li>
								<li className="nav-item"><Link to="/interventionsPage" className="btn text-info">Interventions</Link></li>
								<li className="nav-item" ><Link to="/contactForm" className="btn text-info">Contact</Link></li>	
							</ul>
								
						
						{/* <div className="mx-1" ><Link to="/scheduleSessions" className="btn btn-outline">Schedule Sessions</Link></div>	 */}
						<div className="dropdown d-flex justify-content-center">
							<button
								className="btn btn-info dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Schedule Sessions
								
							</button>
							<ul className="dropdown-menu">
								{/* <li>
								<Link  className=" dropdown-item visible-dropdown-item" to="/scheduleSessions">
									Session 15 minutes
								</Link>
								</li> */}
								<li>
								<Link  className=" dropdown-item visible-dropdown-item" to="/packageSelection">
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
		</div>
	);
};
