import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { RegisterUser } from "../component/RegisterUser";
import { Login } from "../component/Login";
import { Carrousel } from "../component/Carrousel";
import { Interventions } from "../component/Interventions";
import { Link } from "react-router-dom";
import { InterventionsPage  } from "../pages/interventionsPage";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			
			
			<p>
			Psychology is the scientific study of mind and behavior.[1][2] Its subject matter includes the behavior of humans and nonhumans, both conscious and unconscious phenomena, and mental processes such as thoughts, feelings, and motives. Psychology is an academic discipline of immense scope, crossing the boundaries between the natural and social sciences. Biological psychologists seek an understanding of the emergent properties of brains, linking the discipline to neuroscience. As social scientists, psychologists aim to understand the behavior of individuals and groups.[3][4]

A professional practitioner or researcher involved in the discipline is called a psychologist. Some psychologists can also be classified as behavioral or cognitive scientists. Some psychologists attempt to understand the role of mental functions in individual and social behavior. Others explore the physiological and neurobiological processes that underlie cognitive functions and behaviors.
			<p>
				<img src={'https://media.licdn.com/dms/image/v2/D4D16AQEWdICwV1sGXg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1732066571493?e=1740009600&v=beta&t=2MNlqejNHF-ZK2sppgrITMDCyrUa1nTeffyI34HNh1U'}
				className="m-auto d-block w-50 h-50" />
							
			</p>

Psychologists are involved in research on perception, cognition, attention, emotion, intelligence, subjective experiences, motivation, brain functioning, and personality. Psychologists' interests extend to interpersonal relationships, psychological resilience, family resilience, and other areas within social psychology. They also consider the unconscious mind.[5] Research psychologists employ empirical methods to infer causal and correlational relationships between psychosocial variables. Some, but not all, clinical and counseling psychologists rely on symbolic interpretation.
			</p>

			
			
			

		</div>
	);
};
