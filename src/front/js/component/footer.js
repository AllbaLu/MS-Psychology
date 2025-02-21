import React, { Component } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';



const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};


export const Footer = () => (

	<footer className="footer   ">
		<div className="container-fluid ">
			<div className="row mx-4">
				<div className="col col-lg-3">
					<div className=" mt-2 ms-3 ">

						<div><i className="fa-solid fa-user"> </i> MIGUEL SÁ</div>
						<div><i className="fa-solid fa-envelope"> </i> miguelsapsychology@gmail.com</div>

					</div>
				</div>
				
				<div className="col col-lg-3   ">
					
					<div><i className="fa-brands fa-square-whatsapp "></i> (+351)918 079 311</div>
					<div className="d-flex gap-1 mt-2  ">
							<button
								onClick={() => openLink("https://www.linkedin.com/in/miguel-barros-de-s%C3%A1-a336a8a8")}
								className="btn btn-outline-dark  "
								aria-label="LinkedIn">
								<i className="fa-brands fa-linkedin"></i>
							</button>
							<button
								onClick={() => openLink("https://www.youtube.com/@miguelsapsychology")}
								className="btn btn-outline-dark"
								aria-label="YouTube">
								<i className="fa-brands fa-square-youtube"></i>
							</button>
							<button
								onClick={() => openLink("https://www.instagram.com/miguelsapsychology?igsh=MW91anhxYnVqNmtjaQ==")}
								className="btn btn-outline-dark"
								aria-label="Instagram">
								<i className="fa-brands fa-square-instagram"></i>
							</button>
						</div>
					{/* <div className="align-self-center  mt-5">
						<Link to={"/contactForm"} className="text-light stretched-link mx-5 ">Contact </Link>
						</div> 
						<div className="text-center">
						<Link to={"/scheduleSessions"} className="stretched-link">Schedule a Session</Link>
						</div> */}
							
				</div>

				<div className="col col-lg-4 align-self-end ">
					<div className="text-end"><p>&copy; 2025 - All rights reserved</p></div>
				</div>
			</div>

			
			




		</div>

	</footer>
);

