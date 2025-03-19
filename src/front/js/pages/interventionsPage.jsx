
import { Interventions } from "../component/Interventions";




export const InterventionsPage = () => {

    return(
        <>
            <Interventions />
            <div className="container-xxl h-100"  >
                <div className="card-home" style={{placeSelf: "center",  marginBottom: "20px"}}>
                    
                    <figure className="text-center mt-4">
                            <blockquote className="blockquote fs-4">
                                <p>How can I help you improve?</p>
                            </blockquote>
                            
                        </figure>
                    <div className="card-body " style={{textAlign: "justify"}}>
                        <p>
                            Psychology is a powerful tool for personal growth, emotional well-being and optimal performance in different areas of life. 
                            Through my experience in clinical, sport and university psychology, I provide you with the support you need to enhance your well-being, overcome obstacles and achieve your goals.
                        </p>
                            
                    </div>
                        <div className="card-block" style={{textAlign: "justify"}}>
                            <figure className="text-center mt-4">
                                <blockquote className="blockquote fs-4">
                                    <p>Benefits of Psychology: </p>
                                </blockquote>
                                {/* <figcaption className="blockquote-footer">
                                    Know more about our services. 
                                </figcaption> */}
                            </figure>
                            <div className="d-flex justify-content-center pb-5 " style={{borderBottom: "double"}} >
                                <ul className="list-group " >
                                    <li className="list-group mb-3 mt-2" >
                                        <i className="fa-solid fa-angles-right fa-sm mb-2" >  Emotional Wellbeing : </i>  
                                        Learn how to manage stress, anxiety and other emotions that may be affecting your daily life.
                                    </li>
                                    <li className="list-group mb-3">  
                                        <i className="fa-solid fa-angles-right fa-sm mb-2"> Self-knowledge and Personal Growth:</i>  
                                        Discover strengths, areas of improvement and strategies to reach your best version.
                                    </li>
                                    <li className="list-group mb-3">  
                                        <i className="fa-solid fa-angles-right fa-sm mb-2"> Sports Performance:</i>
                                        Improve your concentration, confidence and resilience to optimise your performance in competitions.
                                    </li>
                                    <li className="list-group mb-3">  
                                        <i className="fa-solid fa-angles-right fa-sm mb-2"> Academic and Professional Success:</i>
                                        Develop study, time management and decision-making skills to achieve your goals.
                                    </li>
                                    <li className="list-group mb-3"> 
                                        <i className="fa-solid fa-angles-right fa-sm mb-2"> Healthy Relationships: </i>
                                        Learn to communicate effectively and build positive relationships in all areas of your life.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div className="card-footer mt-3 mb-5 pb-5" style={{display:"none"}}>
                        <div className="mb-5">
                            <p className="mb-5">  </p>
                        </div>
                    </div>
                </div>	
            </div>
                
        </>
    )
}