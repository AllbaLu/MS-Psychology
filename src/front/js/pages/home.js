import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Carrousel } from "../component/Carrousel";
import gif from "../../image/giphy-2.gif"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">

			<div className="text-center mt-2 ">
				<h1 className="display-4"><em><strong>The process of change</strong></em></h1>
				<h3 ><em>Start the process today!</em></h3>
			<img src={gif} style={{Width:  "500px", height: " 300px"}}/>



				<span>
					{/* <img src={'https://media.licdn.com/dms/image/v2/D4D16AQEWdICwV1sGXg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1732066571493?e=1740009600&v=beta&t=2MNlqejNHF-ZK2sppgrITMDCyrUa1nTeffyI34HNh1U'} 
							className="m-auto d-block w-50 h-50" /> */}

				</span>
				



			</div>
		</div>
	);
};
