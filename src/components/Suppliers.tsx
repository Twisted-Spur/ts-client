import React from 'react';

interface Supplier {
    id: number;
    name: string;
    logoUrl: string;
    website: string;
}

const suppliers: Supplier[] = [
    {
        id: 1,
        name: "Gildan",
        logoUrl: "/suppliers/gildan-logo.png",
        website: "https://www.gildan.com/"
    },
    {
        id: 2,
        name: "Comfort Colors",
        logoUrl: "/suppliers/comfort-colors-logo.png",
        website: "https://www.comfortcolors.com/us/en/"
    },
    {
        id: 3,
        name: "Jerzees",
        logoUrl: "/suppliers/jerzees-logo.png",
        website: "https://www.jerzees.com/s/?language=en_US"
    },
];

const Suppliers: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Trusted Brands</h2>
                    <p className="text-gray-600">Working with the best suppliers in the industry</p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                    {suppliers.map((supplier) => (
                        <a
                            key={supplier.id}
                            href={supplier.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full max-w-[200px] aspect-[3/2]"
                        >
                            <div className="w-full h-full bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 relative group">
                                <img
                                    src={supplier.logoUrl}
                                    alt={`${supplier.name} logo`}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Suppliers;