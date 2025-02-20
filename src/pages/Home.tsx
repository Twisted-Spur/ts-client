import React from "react";
import ImageBanner from "../components/ImageBanner.tsx";
import Suppliers from "../components/Suppliers.tsx";

export default function Home(){
    return (
        <React.Fragment>
            {/*<div className="min-h-screen">*/}
                <ImageBanner />
                {/* Rest of your home page content */}
            {/*</div>*/}
            <Suppliers />
        </React.Fragment>
    );
};