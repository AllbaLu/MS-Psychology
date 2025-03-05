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
				justifyContent: "center",
				alignItems: "start",
				// textDecorationLine: "overline",
			}}
			>
				<div className="container text-center mt-5 text-uppercase " >
					<div>

						<h1 className="display-2 text-white mb-2 ms-1 "><strong>The process of change</strong></h1>
						<h3 className="ms-4 mb-2 text-white text-decoration-underline">Start the process today!</h3>
					{/* <img src={gif} style={{Width:  "500px", height: " 300px"}}/> */}
					</div>


				</div>

			</div>
				<div className="text-center mt-4 mx-5 p-5">
					<div className="p-5">

						<h3 >Our Values</h3>
						<p>Kindness, compassion, openness, and inclusion. We value the science of therapeutic change and human growth. We value diversity and individual differences in the many ways people live and experience life.</p>
						<p>Believe that therapy can help anyone to unlock their greatest potential.</p>
						<p>We respect your values, culture, ethnicity, sexual orientation and faith. We understand the role culture plays in the counselling process</p> 
					</div>
					

				</div>
		</div>
	);
};
