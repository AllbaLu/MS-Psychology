import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { InterventionsPage } from "./pages/interventionsPage";
import { LoginPage } from "./pages/loginPage";
import { RegisterUser } from "./component/RegisterUser";
import { ContactForm } from "./pages/contactForm";
import { About } from "./pages/about";
import { ScheduleSessions } from "./pages/scheduleSessions";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<About />} path="/about" />
                        <Route element={<InterventionsPage />} path="/interventionsPage" />
                        <Route element={<LoginPage />} path="/loginPage" />
                        <Route element={<ContactForm />} path="/contactForm" />
                        <Route element={<ScheduleSessions />} path="/scheduleSessions" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
