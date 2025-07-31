import { Interventions } from "../component/Interventions";
import { useTranslation } from 'react-i18next';

export const InterventionsPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Interventions />

            {/* block-1 */}
            <div className="container-xxl h-100">
                <div className="card-home" style={{ placeSelf: "center", marginBottom: "20px" }}>
                    <figure className="text-center mt-4">
                        <blockquote className="blockquote fs-3">
                            <h3>
                                <strong>{t("interventionsPage.title")}</strong>
                            </h3>
                        </blockquote>
                    </figure>
                    <div className="card-body" style={{ textAlign: "justify" }}>
                        <p>{t("interventionsPage.description")}</p>
                    </div>

                    {/* block-2 */}
                    <div className="card-body" style={{ textAlign: "justify" }}>
                        <figure className="text-center mt-4">
                            <blockquote className="blockquote fs-3">
                                <h3>
                                    <strong>{t("interventionsPage.cta")}</strong>
                                </h3>
                            </blockquote>
                        </figure>
                        <div className="d-flex justify-content-center" >
                            <ul className="list-unstyled ">
                                <li className="list mb-3 mt-2" style={{textAlign: "justify"}}>
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{ color: "#63E6BE" }}></i>
                                    <strong>{t("interventionsPage.bullets.0.title")}: </strong>
                                    {t("interventionsPage.bullets.0.text")}
                                </li>
                                <li className="list mb-3" style={{textAlign: "justify"}}>
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{ color: "#63E6BE" }}></i>
                                    <strong>{t("interventionsPage.bullets.1.title")}: </strong>
                                    {t("interventionsPage.bullets.1.text")}
                                </li>
                                <li className="list mb-3" style={{textAlign: "justify"}}>
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{ color: "#63E6BE" }}></i>
                                    <strong>{t("interventionsPage.bullets.2.title")}: </strong>
                                    {t("interventionsPage.bullets.2.text")}
                                </li>
                                <li className="list mb-3" style={{textAlign: "justify"}}>
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{ color: "#63E6BE" }}></i>
                                    <strong>{t("interventionsPage.bullets.3.title")}: </strong>
                                    {t("interventionsPage.bullets.3.text")}
                                </li>
                                <li className="list mb-3" style={{textAlign: "justify"}}>
                                    <i className="fa-solid fa-angles-right fa-sm mb-2" style={{ color: "#63E6BE" }}></i>
                                    <strong>{t("interventionsPage.bullets.4.title")}: </strong>
                                    {t("interventionsPage.bullets.4.text")}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* block-3 */}
                    <div className="card-home" style={{ placeSelf: "center", marginBottom: "30px", paddingBottom: "70px" }}>
                        <figure className="text-center mt-2">
                            <blockquote className="blockquote fs-3">
                                <h3>
                                    <strong>{t("interventionsPage.valuesTitle")}</strong>
                                </h3>
                            </blockquote>
                        </figure>
                        <div className="card-body" style={{ textAlign: "justify", marginBottom: "20px" }}>
                            <p>{t("interventionsPage.valuesText")}</p>
                        </div>

                        <div className="card-footer mt-3 mb-5 pb-5" style={{ display: "none" }}>
                            <div className="mb-5">
                                <p className="mb-5">card</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
