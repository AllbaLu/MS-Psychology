import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import image from "../../image/montainTop2.png"
import gif from "../../image/giphy-2.gif"


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="home h-100">
			<div className="img-home"
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				// justifyContent: "center",
				// alignItems: "end",
				// textAlign: "center"
				// textDecorationLine: "overline",
			}}
			>
				<div className="container-xxl text-center " style={{ padding: "20px" }} >
					<div className="mt-2 mb-5 text-uppercase  ">

						<div className="name mb-5 p-5 " >
							<h2 className="display-2 mb-5" style={{WebkitTextStrokeWidth: "thin"}}><em><strong> Miguel Sá Psychology</strong></em></h2>
						</div>
					</div>

					<div className="text-uppercase mt-5 pb-5" >
						<div className="titulo "style={{ paddingTop: "50px", marginTop: "190px", paddingBottom: "55px" }} >
								<h3 className="display-4 mt-5 text-white mb-2 " ><strong>The process of change</strong></h3>
								<h4 className="text-white text-decoration-underline">Start the process today!</h4>
							{/* <img src={gif} style={{Width:  "500px", height: " 300px"}}/> */}
						</div>
					</div>
				</div>


			</div>
			
		</div>
	);
};
