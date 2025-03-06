
import { Link, useNavigate } from "react-router-dom";



export const Navbar = () => {
		const navigate = useNavigate();

		

	return (
		<div className="container">

			<nav className="navbar navbar-expand-lg  " >
				<div className="container-fluid">
					
				<h1 className="navbar-brand text-dark fs-1 ms-4" >
						{/* <img src={logo} 
						width="50" height="45" /> */}
						
						
						<em><strong> Miguel Sá Psychology</strong></em>
				</h1>
					
					<div className="navbar d-flex flex-row justify-content-around" id="navbarNavAltMarkup">
						<div className="navbar-nav text-dark  ">
							<ul className="navbar-nav d-flex flex-row">

								<li className="nav-item "><Link to="/" className="btn text-info"  >Home</Link></li>
									
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
		</div>
	);
};
