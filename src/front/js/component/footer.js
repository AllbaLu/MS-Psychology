import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (

	<footer className="footer  ">
		<div className="container-fluid bg-secondary navbar-dark">
			<div className="row">
				<div className="col">
					<div className="icons mt-3 ms-4">

						<div><i className="fa-solid fa-user"> MIGUEL SÁ</i></div>
						<div><i className="fa-brands fa-square-whatsapp"> (+351)918 079 311</i></div>
						<div><i className="fa-solid fa-envelope"> miguelsapsychology@gmail.com</i></div>
						<div className="d-flex mb-3 mx-2 ">
							<Link to={"https://www.linkedin.com/in/miguel-barros-de-s%C3%A1-a336a8a8"} className="btn btn-outline-dark"><i className="fa-brands fa-linkedin"></i></Link>
							<Link to={"https://www.youtube.com/@miguelsapsychology"} className="btn btn-outline-dark"><i className="fa-brands fa-square-youtube"></i></Link>
							<Link to={"https://www.instagram.com/miguelsapsychology?igsh=MW91anhxYnVqNmtjaQ=="} className="btn btn-outline-dark"><i className="fa-brands fa-square-instagram"></i></Link>
						</div>

					</div>
				</div>
				<div className="col align-self-center ">
					<div className="text-center"><p>psychologist</p></div>
				</div>
				<div className="col ">
					<div className="align-self-center   mt-5">
						<Link to={"/contactForm"} className="text-dark stretched-link ">Contact      </Link>
					</div>
					<div className="">
						<Link to={"/scheduleSessions"} className="text-dark stretched-link">Schedule a Session</Link>
					</div>
						
					
				</div>
			</div>

			
			




		</div>

	</footer>
);

