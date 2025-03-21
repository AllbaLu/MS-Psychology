import { useState, useEffect } from "react";
import PricingPage from "./pricingPage";





export const ScheduleSessions = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, []);

    return (

        <div className="container">

            {/* <!-- Calendly inline widget begin 15min --> 
            <div className="calendly-inline-widget "
                data-url="https://calendly.com/miguelsapsychology"
                style={{ minWidth: "200px", height: "500px" }}>
            </div>
              <!-- Calendly inline widget end -->    */}

            {/* <!-- Calendly inline widget begin 50min --> */}
            <div className="calendly-inline-widget"
                data-url="https://calendly.com/miguelsapsychology"
                style={{ minWidth: "200px", height: "400px" }}>
            </div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            {/* <!-- Calendly inline widget end --> */}

            <div className="pay mb-5 p-5">
                <div className="mb-5">

                    {/* <PricingPage /> */}
                </div>
                
            </div>

        </div>
    )
}