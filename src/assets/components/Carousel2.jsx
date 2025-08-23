import React, { useState } from "react";
import Slider from "react-slick";
import { Heart } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const products = [
  { id: 1, name: "Стол", price: "800 900", img: "/icons/Product image.svg" },
  {
    id: 2,
    name: "Письменный стол FRIENDLY из коллекции",
    price: "22 640 900",
    img: "/icons/Product image.svg",
  },
  {
    id: 3,
    name: "Гарантия Письменный стол FRIENDLY",
    price: "28 890 900",
    img: "/icons/Product image.svg",
  },
  {
    id: 4,
    name: "Гарантия -30% Кресло Siя",
    price: "14 890 900",
    img: "/icons/Product image.svg",
  },
  {
    id: 5,
    name: "Клавиатура Keychron B6 Pro, зеленый",
    price: "14 890 900",
    img: "/icons/Product image.svg",
  },
  {
    id: 6,
    name: "Клавиатура Keychron B6 Pro, зеленый",
    price: "14 890 900",
    img: "/icons/Product image.svg",
  },
];

export default function Carousel() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[1844px] h-[449px] rounded-2xl p-6 relative">
      <h2 className="text-xl font-bold mb-4">
        Все для вашего нового сотрудника
      </h2>
      <Slider {...settings}>
        {products.map((p) => (
          <div key={p.id} className="p-3">
            <div className="bg-white rounded-2xl relative">
              <button
                onClick={() => toggleFavorite(p.id)}
                className="absolute top-3 right-3 mt-6 mr-7"
              >
                <Heart
                  size={22}
                  className={`${
                    favorites.includes(p.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400"
                  }`}
                />
              </button>

              <img
                src={p.img}
                alt={p.name}
                className="w-[311px] h-[441px] mx-auto object-contain"
              />

              {p.name.includes("Гарантия") && (
                <div className="absolute bottom-16 left-3 bg-blue-500 text-white text-xs font-bold px-6 py-2 rounded-md mb-10 ml-5">
                  Гарантия
                </div>
              )}

              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 mt-5">
                {p.name}
              </h3>

              <p className="font-semibold text-lg">{p.price} сум</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
