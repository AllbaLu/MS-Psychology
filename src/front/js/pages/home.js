import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { RegisterUser } from "../component/RegisterUser";
import { Login } from "../component/Login";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Login />
			<h1>Hello!!</h1>
			<p>
				<img src={rigoImageUrl} />
			
				
			</p>
		</div>
	);
};
