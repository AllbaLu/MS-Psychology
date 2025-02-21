import React from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { image, img, title } from "framer-motion/client";


const categories = [
    {title: "Clinical Psychology",color: "bg-light", description: "Focused on emotional and mental wellbeing.", img: "https://cgei-ud.org/images/psicosensum/products/producto_5006_.png" },
    {title: "Sport Psychology", color: "bg-info", description: "Enhancing mental performance in sport", img:"https://psiquiatriapsicologia-dexeus.com/IMAGES_12/unnamed.jpg"},
    {title: "Psychology professor", color: "bg-light ", description: "Psychology training", img: "https://elplacerdelalectura.com/wp-content/uploads/2024/04/af33ae05-23b3-483a-a086-d693a175d8d9.jpg"}
]

export const Interventions = () => {
    return (
        <div className="container ">
            <section id="interventions" className="py-5 d-flex flex-wrap justify-content-center gap-5">
                {categories.map((category, index) => (
                    <motion.div
                    key={index}
                    className={`card text-dark ${category.color} mb-3`}
                    style={{width: "16rem"}}
                    whileHover={{scale:1.05}}
                    whileTap={{scale: 0.95}}
                    transition={{ duration: 0.4, animationDirection: "normal" }}
                    
                    >
                        <img src={category.img} className="card-img-top w-100 h-20" alt={category.title}  />
                        <div className="card-body">
                            
                            <h5 className="card-title">{category.title} </h5>
                            <p className="card-text">{category.description} </p>
                        </div>
                    </motion.div>
                ))}
            </section>
            

        </div>
    )
}