// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";

// //include your index.scss file into the bundle
// import "../styles/index.css";

// //import your own components
// import Layout from "./layout";

// //render your react application
// ReactDOM.render(<Layout />, document.querySelector("#app"));

import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from "./layout";
import "../styles/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)