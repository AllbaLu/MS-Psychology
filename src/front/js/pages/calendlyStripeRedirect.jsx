import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const CalendlyStripeRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const sessionPackage = params.get("sessionPackage");

  useEffect(() => {
    // Carga el script de Calendly si aún no está en el documento
    const scriptId = "calendly-widget-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }

    // Escuchar evento de sesión agendada
    const handler = (event) => {
      if (
        event.origin.includes("calendly.com") &&
        event.data.event === "calendly.event_scheduled"
      ) {
        navigate(sessionPackage === "3" ? "/payment-3" : "/payment-1");
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [sessionPackage, navigate]);

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold text-center mb-4">
        {sessionPackage === "3"
          ? "Book your session (1 of 3)"
          : "Book your session"}
      </h2>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/miguelsapsychology"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};
