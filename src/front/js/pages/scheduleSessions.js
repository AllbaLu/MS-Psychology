import React, { useState, useEffect } from "react";





export const ScheduleSessions = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src="https://assets.calendly.com/assets/external/widget.js";
        script.async=true;
        document.body.appendChild(script)
        
        return () => {
            document.body.removeChild(script)
        }
    },[]);

    return(

        <div>

              {/* <!-- Calendly inline widget begin -->  */}
        <div className="calendly-inline-widget "
            data-url="https://calendly.com/miguelsapsychology"
            style={{ minWidth: "200px", height: "500px" }}
        ></div>
             {/* <!-- Calendly inline widget end -->   */}
        </div>
    )
}