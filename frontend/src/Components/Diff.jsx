import { useState } from "react";
import PortfolioLight from "../Photos/Leftphoto.png";
import PortfolioDark from "../Photos/RightPhoto.png";
import Todo from "../Photos/Homepage.png";
import Selenium from "../Photos/Selenium.png";
import GithubButton from "./GithubButton";
import { ChevronLeft, ChevronRight } from "react-feather";
import LikeButton from "./LikeButton";
import { NavLink } from "react-router-dom";

const slides = [
  {
    image: PortfolioLight,
    title: "Portföy Web Sitesi (Light)",
    description: "Kodlarını incelemek ve detayları öğrenmek için aşağıdaki butona tıkla!",
    githubLink: "https://github.com/alpataseven/myPortfolioWebsite/tree/main/frontend"
  },
  {
    image: PortfolioDark,
    title: "Portföy Web Sitesi (Dark)",
    description: "Bu projede React ve Tailwind CSS kullanıldı.",
    githubLink: "https://github.com/alpataseven/myPortfolioWebsite/tree/main/frontend"
  },
  {
    image: Todo,
    title: "ToDo App Projesi",
    description: "Daha fazla detay için butona tıklayın.",
    githubLink: "https://github.com/alpataseven/ReactForm"
  },
  {
    image: Selenium,
    title: "Selenium ile Ekşi Sözlük Veri Toplama Scripti",
    description: "Daha fazla detay için butona tıklayın.",
    githubLink: "https://github.com/alpataseven/Eksi-Sozluk-Project"
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center items-center h-[300px] mt-[-80px]">
      <div className="relative flex items-center justify-center w-[1100px]">
        <button
          className="absolute left-2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition border border-gray-500 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft size={20} />
        </button>
        <div className="card lg:card-side bg-base-100 border border-gray-300 p-5 flex w-full">
          <figure className="w-[50rem] border-r border-gray-300">
            <img
              src={slides[currentIndex].image}
              alt="carousel"
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <div className="card-body w-[30rem]">
            <h2 className="card-title">{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
            <div className="card-actions justify-between items-center">
                <NavLink to={slides[currentIndex].githubLink}>
                    <GithubButton />
                </NavLink>
              <LikeButton />
            </div>
          </div>
        </div>
        <button
          className="absolute right-2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition border border-gray-500 z-10"
          onClick={nextSlide}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
