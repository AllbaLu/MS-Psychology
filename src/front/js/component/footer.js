import React, { Component } from "react";
import { Link } from "react-router-dom";

const Linkdn = () => {
	window.open("https://www.linkedin.com/in/miguel-barros-de-s%C3%A1-a336a8a8")
};
const Youtbe = () => {
	window.open("https://www.youtube.com/@miguelsapsychology")
};
const Insta = () => {
	window.open("https://www.instagram.com/miguelsapsychology?igsh=MW91anhxYnVqNmtjaQ==")
};

export const Footer = () => (

	<footer className="footer  ">
		<div className="container-fluid bg-secondary navbar-dark">
			<div className="row mx-4">
				<div className="col">
					<div className="text-light mt-3 ms-4">

						<div><i className="fa-solid fa-user"> </i> MIGUEL SÁ</div>
						<div><i className="fa-brands fa-square-whatsapp"> </i> (+351)918 079 311</div>
						<div><i className="fa-solid fa-envelope"> </i> miguelsapsychology@gmail.com</div>
						<div className="d-flex text-light mb-3 mx-2 ">
							<button onClick={Linkdn} className="btn btn-outline-dark"><i className="fa-brands fa-linkedin"></i></button>
							<button onClick={Youtbe} className="btn btn-outline-dark"><i className="fa-brands fa-square-youtube"></i></button>
							<button onClick={Insta} className="btn btn-outline-dark"><i className="fa-brands fa-square-instagram"></i></button>
						</div>

					</div>
				</div>
				<div className="col text-light align-self-center ">
					<div className="text-center"><p>psychologist</p></div>
				</div>
				<div className="col text-end mx-5  ">
					<div className="align-self-center  mt-5">
						<Link to={"/contactForm"} className="text-light stretched-link mx-5 ">Contact      </Link>
					</div>
					<div className="">
						<Link to={"/scheduleSessions"} className="text-light stretched-link">Schedule a Session</Link>
					</div>
						
					
				</div>
			</div>

			
			




		</div>

	</footer>
);

