import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import image from "../../image/iStock.jpg"



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home position-relative h-100 d-flex flex-column justify-content-center">
			<img src={image} alt="clinicalPsychology" className="hero-background" />

			<div className="container-xxl text-center content-overlay">
				<div className="mb-5 text-uppercase">
					<div className="name mb-1 p-5 ">
						<h2 className="display-1 mb-5" style={{ WebkitTextStrokeWidth: "thin" }}>
							<em><strong> Miguel Sá Psychology</strong></em>
						</h2>
					</div>
				</div>

				<div className="text-uppercase pb-5">
					<div className="titulo text-highlight mt-4" style={{ paddingTop: "50px", marginTop: "190px", paddingBottom: "55px" }}
					>
						<h3 className="display-4 text-white mt-5 mb-2">
							<strong>The process of change</strong>
						</h3>
						<h4 className="text-white text-decoration-underline">Start the process today!</h4>
					</div>
				</div>
			</div>
		</div>


	);
};
