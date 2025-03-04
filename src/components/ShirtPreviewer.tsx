import React from 'react';
import {Print} from "../pages/ShirtEditor.tsx";

interface ShirtPreviewProps {
    color: string;
    prints: Print[];
}

const ShirtPreviewer: React.FC<ShirtPreviewProps> = ({ color, prints }) => {
    return (
        <div className="relative w-full h-96 bg-white border rounded shadow-lg" style={{ backgroundColor: color }}>
            {/* Shirt Base Image */}
            <img
                src="/products/comfort-colors-tshirt-light-green.jpg"
                alt="Shirt Base"
                className="w-full h-full object-cover opacity-80"
            />
            {/* Overlay prints */}
            {prints.map((print) => (
                <div
                    key={print.id}
                    className={`absolute ${print.location} bg-white bg-opacity-70 p-1 rounded`}
                >
                    <span className="text-sm font-bold">{print.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ShirtPreviewer;