import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { id: 1, url: "http://okay.jkgame.vip/web_game/plat/config/hall/caesarskingdom/pc_bigAdvertUI/2658.png" },
  { id: 2, url: "http://okay.jkgame.vip/web_game/plat/config/hall/caesarskingdom/pc_bigAdvertUI/2066.png" },
  { id: 3, url: "http://okay.jkgame.vip/web_game/plat/config/hall/caesarskingdom/pc_bigAdvertUI/2655.png" },
  { id: 4, url: "http://okay.jkgame.vip/web_game/plat/config/hall/caesarskingdom/pc_bigAdvertUI/0.png" },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const delay = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, delay);
    return () => clearTimeout(timer);
  }, [current]);

  const handlePrev = () => {
    setPrev(current);
    setDirection("left");
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
    setIsAnimating(true);
  };

  const handleNext = () => {
    setPrev(current);
    setDirection("right");
    setCurrent((current + 1) % slides.length);
    setIsAnimating(true);
  };

  const getTranslateClass = (index) => {
    if (index === current) {
      return "translate-x-0";
    } else if (index === prev) {
      return direction === "right"
        ? "-translate-x-full"
        : "translate-x-full";
    } else {
      return direction === "right"
        ? "translate-x-full"
        : "-translate-x-full";
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden h-96 rounded-lg">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.url}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full transition-transform  duration-500 ease-in-out  ${
              getTranslateClass(index)
            } ${index === current || index === prev ? "z-1" : "z-0"}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="z-3 absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 hover:cursor-pointer"
        onClick={handlePrev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="z-3 absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 hover:cursor-pointer"
        onClick={handleNext}
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2 absolute bottom-4 left-0 right-0">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== current) {
                setPrev(current);
                setDirection(index > current ? "right" : "left");
                setCurrent(index);
                setIsAnimating(true);
              }
            }}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
