import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import image from "../../image/rectangle-1.png"
import gif from "../../image/giphy-2.gif"


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home"
		style={{
			backgroundImage: `url(${image})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			width: "100%",
			minHeight: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}}
		>

			<div className="container text-center mt-2 " >
				<h1 className="display-4"><em><strong>The process of change</strong></em></h1>
				<h3 ><em>Start the process today!</em></h3>
			<img src={gif} style={{Width:  "500px", height: " 300px"}}/>


			</div>
		</div>
	);
};
