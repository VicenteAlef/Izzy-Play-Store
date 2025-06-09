import React, { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      prevSlide;
    }, 3000);

    return () => clearInterval(timer); // limpa intervalo ao desmontar
  }, [total]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative w-full max-w-full mx-auto overflow-hidden rounded-lg shadow-lg mt-10 mb-10">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#00000025] bg-opacity-50 text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#00000025] bg-opacity-50 text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
