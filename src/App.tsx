import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import SignIn from "./pages/SignIn.tsx";
import SignUp from "./pages/SignUp.tsx";

function App() {

    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App
