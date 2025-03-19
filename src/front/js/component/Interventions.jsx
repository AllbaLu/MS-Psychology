
import img from "../../image/meeting.png"

import "../../styles/interventions.css";



const interventionsData = [
    {
        id:1,
        title: "Clinical Psychology",
        description: "Through clinical psychology, you will be able to embark on a journey of personal discovry and growth. Through an ethical and responsible approach, we will be able to work through deep personal experiences and to build a renewed and empowered sense of self, so you can lead a happier life.",
        image: "https://cgei-ud.org/images/psicosensum/products/producto_5006_.png",
    },
    {
        id:2,
        title: "Performance Psychology",
        description: "Inspired in my work with high-performance individuals (in sports, tech or finance), performance psychology aims you becoming the best version of yourself. If you are aware of your abilities and want to pursue personal and professional excellence, this is the place for you.",
        image:`${img}` 
    },
    {
        id:3,
        title: "Psychology for teams and companies",
        description: "This service is tailored to groups of people who know they have to set themselves apart in a increasingly competitive market. Through motivational speaking or designed workshops, the goal is to help your team or company developed the strategies necessary to get to the next level.",
        image: "https://elplacerdelalectura.com/wp-content/uploads/2024/04/af33ae05-23b3-483a-a086-d693a175d8d9.jpg"
    }
]

export const Interventions = () => {
    return (
        <>
            <div>
                <figure className="text-center mt-4">
                    <blockquote className="blockquote fs-4">
                        <p>Interventions</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Know more about our services. 
                    </figcaption>
                </figure>
            </div>
            <div className="interventions-container ">
                {interventionsData.map((item) => (
                    <div key={item.id} className="card">
                        <div className="card-inner"> 
                            {/* front */}
                            <div className="card-front" >
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                            </div>
                            {/* back */}
                            <div className="card-back" style={{textAlign: "justify", fontSize: "large"}}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))} 
                

            </div>
            
        </>
    )
}