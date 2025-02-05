import {useState} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import Header from "./components/Header.tsx";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <NavBar />
                <Routes>
                    <Route path="/contactUs" element={<ContactUs />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
                {/*<div>*/}
                {/*    <a href="https://vite.dev" target="_blank">*/}
                {/*        <img src={viteLogo} className="logo" alt="Vite logo"/>*/}
                {/*    </a>*/}
                {/*    <a href="https://react.dev" target="_blank">*/}
                {/*        <img src={reactLogo} className="logo react" alt="React logo"/>*/}
                {/*    </a>*/}
                {/*</div>*/}
                {/*<h1>Vite + React</h1>*/}
                {/*<div className="card">*/}
                {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
                {/*        count is {count}*/}
                {/*    </button>*/}
                {/*    <p>*/}
                {/*        Edit <code>src/App.tsx</code> and save to test HMR*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<p className="read-the-docs">*/}
                {/*    Click on the Vite and React logos to learn more*/}
                {/*</p>*/}
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App
