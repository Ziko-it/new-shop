import React, { useState } from "react";

function Carousel() {
  const slides = [{ id: 1, img: "/icons/Hero.png" }];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[1840px] h-[496px] flex items-center justify-center bg-gray-100 rounded-lg mx-auto overflow-hidden">
      <img
        src={slides[current].img}
        alt={slides[current].text}
        className="w-[1890px] h-[400px] object-contain"
      />
      <div className="absolute bottom-6 text-4xl font-bold">
        {slides[current].text}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow text-2xl"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow text-2xl"
      >
        ▶
      </button>
    </div>
  );
}

export default Carousel;
