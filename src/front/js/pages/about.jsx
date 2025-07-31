import logo from "../../image/giphyMoving1.gif";
import foto from "../../image/fotoMiguelPerfil.jpg";
import certificado from "../../image/certificadoRegPsych.jpg";
import declaracion from "../../image/DeclaracOrdPsych.jpg";
import registro from "../../image/regEuroPsy.jpg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/about.css";

export const About = () => {
  const [modalImg, setModalImg] = useState(null);
  const { t } = useTranslation();

  const experiences = [
    ["Curtin University Malaysia", "2024 - Present"],
    ["Telemedicine", "2024 - Present"],
    ["MiguelSa Psychology", "2017 - Present"],
    ["Universidade Europeia", "2022-2025"],
    ["SeaYourself", "2024"],
    ["Hospital da Luz", "2023-2024"],
    ["Rafa Nadal Academy", "2022-2023"],
    ["Sporting CP", "2021-2022"],
    ["FC Famalicão", "2020-2021"],
    ["SL Benfica", "2013-2020"]
  ];

  return (
    <div className="container h-100 bg-transparent">
      <div>
        <figure className="text-center mt-4">
          <blockquote className="blockquote fs-4">
            <p>{t("about.title")}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            {t("about.name")}
          </figcaption>
        </figure>
      </div>

      <div className="card-about mb-3 mt-5" style={{ maxWidth: "400rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={foto}
              alt="Photo of Dr. Miguel Sá"
              style={{ width: "300px", height: "250px", paddingLeft: "50px" }}
            />
          </div>
          <div className="col-md-8 bg-transparent">
            <div className="card-body" style={{ textAlign: "justify" }}>
              <h5 className="card-title text-center">
                {t("about.subtitle")}
              </h5>
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
            </div>
          </div>
        </div>

        <div className="card-body bg-transparent" style={{ marginBottom: "50px", textAlign: "justify", paddingBottom: "10px" }}>
          <p>{t("about.bio3")}</p>
          <p className="text-center mt-4">
            <strong>{t("about.cta")}</strong>
          </p>
        </div>

        {/* academic and professional */}
        <div className="row mb-4">
          <div className="col-sm-6">
            <div className="card-text">
              <figure className="text-center mt-4">
                <blockquote className="blockquote fs-4">
                  <p>{t("about.academicTitle")}</p>
                </blockquote>
              </figure>
              <ul className="list-unstyled">
                <li>{t("about.academic.0")}</li>
                <li>{t("about.academic.1")}</li>
                <li>{t("about.academic.2")}</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card-text">
              <figure className="text-center mt-4">
                <blockquote className="blockquote fs-4">
                  <p>{t("about.professionalTitle")}</p>
                </blockquote>
              </figure>
              <ul className="list-unstyled">
                {experiences.map(([institution, period], index) => (
                  <li key={index} className="d-flex justify-content-between">
                    <span>{institution}</span>
                    <span>
                      {period.includes("Present") ? (
                        <>
                          {period.split(" - ")[0]} - <strong>{t("about.present")}</strong>
                        </>
                      ) : (
                        period
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* certificates */}
        <div className="mb-3 d-flex justify-content-evenly" style={{ alignItems: "center", paddingBottom: "40px" }}>
          <img src={certificado} onClick={() => setModalImg(certificado)} className="rounded float" alt={t("about.cert1Alt")} style={{ width: "200px", height: "150px", border: "inset" }} />
          <img src={declaracion} onClick={() => setModalImg(declaracion)} className="rounded float" alt={t("about.cert2Alt")} style={{ width: "200px", height: "150px", border: "ridge" }} />
          <img src={registro} onClick={() => setModalImg(registro)} className="rounded float" alt={t("about.cert3Alt")} style={{ width: "200px", height: "150px", border: "groove" }} />
        </div>

        {modalImg && (
          <div className="modal" onClick={() => setModalImg(null)}>
            <img src={modalImg} alt="Zoomed certificate" />
          </div>
        )}

        <div className="mb-5 pb-2">
          <p className="text-center mb-5">
            <strong>{t("about.pendingCertifications")}</strong>
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </p>
        </div>
        <div className="card-footer mb-5"></div>
      </div>
    </div>
  );
};
