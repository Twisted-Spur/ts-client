import React from "react";
import ImageBanner from "../components/ImageBanner.tsx";
import Suppliers from "../components/Suppliers.tsx";

export default function Home(){
    return (
        <React.Fragment>
            <ImageBanner />
            <Suppliers />
        </React.Fragment>
    );
};