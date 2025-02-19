import React from "react";
import ImageBanner from "../components/ImageBanner.tsx";

export default function Home(){
    return (
        <React.Fragment>
            {/*<div className="min-h-screen">*/}
                <ImageBanner />
                {/* Rest of your home page content */}
            {/*</div>*/}
        </React.Fragment>
    );
};