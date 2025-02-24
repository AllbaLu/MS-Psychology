import React from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { image, img, title } from "framer-motion/client";
import "../../styles/interventions.css";


// const categories = [
//     {title: "Clinical Psychology",color: "bg-light", description: "Focused on emotional and mental wellbeing.", img: "https://cgei-ud.org/images/psicosensum/products/producto_5006_.png" },
//     {title: "Sport Psychology", color: "bg-info", description: "Enhancing mental performance in sport", img:"https://psiquiatriapsicologia-dexeus.com/IMAGES_12/unnamed.jpg"},
//     {title: "Psychology professor", color: "bg-light ", description: "Psychology training", img: "https://elplacerdelalectura.com/wp-content/uploads/2024/04/af33ae05-23b3-483a-a086-d693a175d8d9.jpg"}
// ]
const interventionsData = [
    {
        id:1,
        title: "Clinical Psychology",
        description: "Focused on emotional and mental wellbeing.",
        image: "https://cgei-ud.org/images/psicosensum/products/producto_5006_.png",
    },
    {
        id:2,
        title: "Sport Psychology",
        description: "Enhancing mental performance in sport",
        image: "https://psiquiatriapsicologia-dexeus.com/IMAGES_12/unnamed.jpg"
    },
    {
        id:3,
        title: "Psychology professor",
        description: "Psychology training",
        image: "https://elplacerdelalectura.com/wp-content/uploads/2024/04/af33ae05-23b3-483a-a086-d693a175d8d9.jpg"
    }
]

export const Interventions = () => {
    return (
        <div className="interventions-container ">
           {interventionsData.map((item) => (
            <div key={item.id} className="card">
                <div className="card-inner"> 
                    {/* front */}
                    <div className="card-front">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                    {/* back */}
                    <div className="card-back">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
           ))} 
            

        </div>
    )
}