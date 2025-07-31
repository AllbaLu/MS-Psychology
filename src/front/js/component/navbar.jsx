import { Link, useNavigate } from "react-router-dom";
import logo from "../../image/image.png";
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
	const navigate = useNavigate();
	const { t } = useTranslation(); 

	return (
		<div className="container">
			<nav className="navbar navbar-expand-sm">
				<div className="container-fluid">
					<h1 className="navbar-brand text-dark ms-5">
						<img
							src={logo}
							alt="mentalHealth"
							width="180"
							height="90"
						/>
						<p className="badge text-wrap text-dark" style={{ width: "2rem", borderLeft: "solid" }}>
							{t("navbar.subtitle")}
						</p>
					</h1>

					<div className="navbar d-flex flex-row justify-content-evenly" id="navbarNavAltMarkup">
						<div className="navbar-nav text-dark">
							<ul className="navbar-nav d-flex flex-row">
								<li className="nav-item">
									<Link to="/" className="btn text-info">{t("navbar.home")}</Link>
								</li>
								<li className="nav-item">
									<Link to="/about" className="btn text-info">{t("navbar.about")}</Link>
								</li>
								<li className="nav-item">
									<Link to="/interventionsPage" className="btn text-info">{t("navbar.interventions")}</Link>
								</li>
								<li className="nav-item">
									<Link to="/contactForm" className="btn text-info">{t("navbar.contact")}</Link>
								</li>
							</ul>

							<div className="dropdown d-flex justify-content-center">
								<button
									className="btn btn-info dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{t("navbar.schedule")}
								</button>
								<ul className="dropdown-menu">
									<li>
										<Link className="dropdown-item visible-dropdown-item" to="/packageSelection">
											{t("navbar.fullSession")}
										</Link>
									</li>
								</ul>
							</div>
						</div>
						{/* Login/signup opcionales */}
					</div>
				</div>
			</nav>
		</div>
	);
};
