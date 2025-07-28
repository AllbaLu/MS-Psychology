import img from "../../image/meeting.png";
import { useTranslation } from 'react-i18next';
import "../../styles/interventions.css";

export const Interventions = () => {
    const { t } = useTranslation();

    const interventionsData = [
        {
            id: 1,
            title: t("interventions.clinical.title"),
            description: t("interventions.clinical.description"),
            image: "https://cgei-ud.org/images/psicosensum/products/producto_5006_.png",
        },
        {
            id: 2,
            title: t("interventions.performance.title"),
            description: t("interventions.performance.description"),
            image: `${img}`
        },
        {
            id: 3,
            title: t("interventions.teams.title"),
            description: t("interventions.teams.description"),
            image: "https://elplacerdelalectura.com/wp-content/uploads/2024/04/af33ae05-23b3-483a-a086-d693a175d8d9.jpg"
        }
    ];

    return (
        <>
            <div>
                <figure className="text-center mt-4">
                    <blockquote className="blockquote fs-4">
                        <p>{t("interventions.title")}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {t("interventions.subtitle")}
                    </figcaption>
                </figure>
            </div>
            <div className="interventions-container">
                {interventionsData.map((item) => (
                    <div key={item.id} className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                            </div>
                            <div className="card-back" style={{ textAlign: "justify", fontSize: "large" }}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
