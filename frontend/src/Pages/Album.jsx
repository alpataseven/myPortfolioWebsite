import React, { useState } from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScrollProgress from "../Components/ScrollProgress";
import photo1 from "../Photos/photo1.jpg"
import photo2 from "../Photos/photo2.jpg"
import photo3 from "../Photos/photo3.jpg"
import photo4 from "../Photos/photo4.jpg"
import photo5 from "../Photos/photo5.jpg"
import photo6 from "../Photos/photo6.jpg"
import photo7 from "../Photos/photo7.jpg"
import photo8 from "../Photos/photo8.jpg"
import photo9 from "../Photos/photo9.jpg"
import photo10 from "../Photos/photo10.jpg"
import photo11 from "../Photos/photo11.jpg"
import photo12 from "../Photos/photo12.jpg"
import photo13 from "../Photos/photo13.jpg"
import photo14 from "../Photos/photo14.jpg"
import photo15 from "../Photos/photo15.jpg"
import photo16 from "../Photos/photo16.jpg"
import photo17 from "../Photos/photo17.jpg"
import photo18 from "../Photos/photo18.jpg"
import photo19 from "../Photos/photo19.jpg"
import photo20 from "../Photos/photo20.jpg"
import photo21 from "../Photos/photo21.jpg"
import photo22 from "../Photos/photo22.jpg"
import photo23 from "../Photos/photo23.jpg"

const Photos = [
    photo1, photo2, photo3, photo4, photo22, photo6, photo22, photo8, photo9, photo10, photo11, photo12,
    photo13, photo14, photo15, photo23, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo16, photo5, photo7
];

function CarouselSlider({ photos, onClose, initialIndex }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-4/5 h-4/5">
                <img src={photos[currentIndex]} className="w-full h-full object-contain" />
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2" onClick={prevSlide}>
                    &lt;
                </button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2" onClick={nextSlide}>
                    &gt;
                </button>
                <button className="absolute top-4 right-4 text-white" onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    );
}

export default function Album() {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    const openCarousel = (index) => {
        setSelectedPhotoIndex(index);
    };

    const closeCarousel = () => {
        setSelectedPhotoIndex(null);
    };

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <div className="flex justify-center my-20">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1 p-20">
                    {Photos.map((item, index) => (
                        <div className="p-2" key={index}>
                            <img
                                key={index}
                                src={item}
                                className="w-full rounded-lg mb-4 break-inside-avoid cursor-pointer group-hover:opacity-50 transition-opacity duration-300" // Hover efekti eklendi
                                onClick={() => openCarousel(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            {selectedPhotoIndex !== null && (
                <CarouselSlider photos={Photos} onClose={closeCarousel} initialIndex={selectedPhotoIndex} />
            )}
        </>
    );
}