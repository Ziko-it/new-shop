import React, { useState, useEffect } from "react";

function Carousel() {
  const slides = [
    { id: 1, img: "/icons/Hero section.png" },
    { id: 2, img: "/icons/Hero section (1).png" },
    { id: 3, img: "/icons/Hero section (2).png" },
    { id: 4, img: "/icons/Hero section (3).png" },
    { id: 5, img: "/icons/Hero section (4).png" },
    { id: 6, img: "/icons/Hero section (5).png" },
  ];

  const [current, setCurrent] = useState(0);

  // Avtomatik o'tishi uchun useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 soniya

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-[1870px] h-[640px] rounded-lg mx-auto overflow-hidden">
      <img
        src={slides[current].img}
        alt={slides[current].text}
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-bold bg-black/40 px-6 py-2 rounded-lg">
        {slides[current].text}
      </div>
    </div>
  );
}

export default Carousel;
