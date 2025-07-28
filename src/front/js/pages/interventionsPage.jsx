
import { Interventions } from "../component/Interventions";
import { useTranslation } from 'react-i18next';





export const InterventionsPage = () => {

    return (
        <>
            {/* card-inner */}
            <Interventions />
            {/* block-1 */}
            <div className="container-xxl h-100 "  >
                <div className="card-home" style={{ placeSelf: "center", marginBottom: "20px" }}>

                    <figure className="text-center mt-4">
                        <blockquote className="blockquote fs-3">
                            <h3 >
                                    <strong>How can I help you improve?</strong>
                            </h3>
                        </blockquote>

                    </figure>
                    <div className="card-body " style={{ textAlign: "justify" }}>
                        <p>
                            Psychology is a powerful tool for personal growth, emotional well-being and optimal performance in different areas of life.
                            Through my experience in clinical, sport and university psychology, I provide you with the support you need to enhance your well-being, overcome obstacles and achieve your goals.
                        </p>

                    </div>
                    {/* block-2 */}
                    <div className="card-body" style={{ textAlign: "justify" }}>
                        <figure className="text-center mt-4">
                            <blockquote className="blockquote fs-3">
                                <h3 >
                                    <strong>Benefits of Psychology:</strong>
                                </h3>
                            </blockquote>

                        </figure>
                        <div className="d-flex justify-content-center  " >
                            <ul className="list-unstyled" >
                                <li className="list mb-3 mt-2" >
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{color:" #63E6BE"}} ></i> <strong>Emotional Well-being : </strong> 
                                    Learn how to manage stress, anxiety and other emotions that may be affecting your daily life.
                                </li>
                                <li className="list mb-3">
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{color:" #63E6BE"}}></i> <strong>Self-knowledge and Personal Growth : </strong> 
                                    Discover strengths, areas of improvement and strategies to reach your best version.
                                </li>
                                <li className="list mb-3">
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{color:" #63E6BE"}}></i> <strong>Academic and Professional Success : </strong>
                                    Develop study, time management and decision-making skills to achieve your goals.
                                </li>
                                <li className="list mb-3">
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{color:" #63E6BE"}}></i> <strong>Healthy Relationships : </strong>
                                    Learn to communicate effectively and build positive relationships in all areas of your life.
                                </li>
                                <li className="list mb-3">
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{color:" #63E6BE"}}></i> <strong>Sports Performance : </strong>
                                    Improve your concentration, confidence and resilience to optimise your performance in competitions.
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* block-3 */}
                    <div className="card-home" style={{ placeSelf: "center", marginBottom: "30px", paddingBottom: "70px" }}>
                        <figure className="text-center mt-2">
                            <blockquote className="blockquote fs-3">

                                <h3 >
                                    <strong>Values</strong>
                                </h3>
                            </blockquote>

                        </figure>
                        <div className="card-body  " style={{ textAlign: "justify", marginBottom: "20px" }}>

                            <p>Kindness, compassion, openness, and inclusion. That is the true value of the science of therapeutic change and human growth.
                                Diversity and individual differences in the many ways people live and experience life are truly valued as part of the human experience.
                                And your values, culture, ethnicity, sexual orientation, and faith will always be respected.
 
                            <strong> There can be no growth in the therapeutic process without understanding and valuing what makes you unique!</strong></p>


                        </div>
                        <div className="card-footer mt-3 mb-5 pb-5" style={{ display: "none" }}>
                            <div className="mb-5">
                                <p className="mb-5"> card  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}