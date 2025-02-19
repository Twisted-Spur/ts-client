import { useState, useEffect, SetStateAction} from 'react';
import {useNavigate} from 'react-router-dom';

const ImageBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const banners = [
        {
            id: 1,
            imageUrl: "https://example.com/banner1.jpg",
            title: "Custom Shirts",
            description: "Build your new favorite shirt today!",
            link: "/category/custom-shirts"
        },
        {
            id: 2,
            imageUrl: "https://example.com/banner2.jpg",
            title: "Custom Hats",
            description: "Get that hat you always wanted.",
            link: "/category/custom-hats"
        },
        {
            id: 3,
            imageUrl: "https://example.com/banner3.jpg",
            title: "Custom Drinkware",
            description: "Flex your favorite saying on every drink!",
            link: "/category/custom-drinkware"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    const goToPrevious = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) =>
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Banner Images */}
            {banners.map((banner, index) => (
                <div
                    key={banner.id}
                    className={`absolute w-full h-full transition-opacity duration-500 ease-in-out 
            ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
                >
                    {/* Only make the current banner clickable */}
                    {index === currentIndex && (
                        <div
                            onClick={() => navigate(banner.link)}
                            className="absolute inset-0 cursor-pointer"
                        >
                            <img
                                src={banner.imageUrl}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Banner Content Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-40 transition-all duration-300">
                                <div className="container mx-auto px-4 h-full flex items-center">
                                    <div className="text-white">
                                        <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                                        <p className="text-xl mb-6">{banner.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 z-30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 z-30"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation();
                            goToSlide(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-200 
              ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageBanner;