import React, { useState } from "react";
import Slider from "react-slick";
import { Heart } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "MacBook Air",
    price: "14 890 900",
    img: "/icons/Apple MacBook Air 15.svg",
  },
  {
    id: 2,
    name: "Apple Display",
    price: "22 640 900",
    img: "/icons/Apple Монитор.svg",
  },
  {
    id: 3,
    name: "Mac Studio",
    price: "28 890 900",
    img: "/icons/Apple Mac Studio.svg",
  },
  { id: 4, name: "iPad Air", price: "14 890 900", img: "/icons/Apple.svg" },
  {
    id: 5,
    name: "Apple Keyboard",
    price: "14 890 900",
    img: "/icons/Клавиатура.svg",
  },
  {
    id: 6,
    name: "Apple Keyboard",
    price: "14 890 900",
    img: "/icons/Клавиатура.svg",
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
    <div className="w-[1844px] h-[496px] bg-red-50 rounded-2xl p-6 mx-auto">
      <h2 className="text-xl font-bold mb-4">Гаджеты в подарок</h2>
      <Slider {...settings}>
        {products.map((p) => (
          <div key={p.id} className="p-3">
            <div className="bg-white rounded-2xl shadow-md p-4 relative h-[364px] flex flex-col">
              <button
                onClick={() => toggleFavorite(p.id)}
                className="absolute top-3 right-3"
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

              <div className="flex-1 flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-[211px] h-[200px] object-contain"
                />
              </div>

              <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-md">
                Распродажа
              </div>
              <div className="absolute bottom-3 left-3 bg-gray-400 text-white text-xs font-bold px-4 py-2 rounded-md ml-27">
                -70%
              </div>
            </div>

            <p className="mt-2  text-red-500 font-semibold text-lg">
              {p.price} сум
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
