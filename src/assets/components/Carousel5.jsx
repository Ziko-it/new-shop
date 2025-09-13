import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: `Apple MacBook Air 15" (M4, 2025), 32 ГБ, 2 ТБ `,
    price: "14 890 900",
    img: "/icons/Apple MacBook Air 15.svg",
  },
  {
    id: 2,
    name: `Apple MacBook Air 15" (M4, 2025), 16 ГБ, 1 ТБ `,
    price: "11 590 000",
    img: "/icons/Apple MacBook Air 15.svg",
  },
  {
    id: 3,
    name: `Apple MacBook Pro 14" (M4 Pro)`,
    price: "21 300 000",
    img: "/icons/Apple MacBook Air 15.svg",
  },
  {
    id: 4,
    name: `Apple MacBook Air 13" (M3)`,
    price: "9 890 000",
    img: "/icons/Apple MacBook Air 15.svg",
  },
];

export default function Carousel() {
  const [counts, setCounts] = useState({});
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const handleAddClick = (product) => {
    setCounts((prev) => ({ ...prev, [product.id]: 1 }));
    addToCart(product);
  };

  const handleIncrease = (product) => {
    setCounts((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
    addToCart(product);
  };

  const handleDecrease = (product) => {
    setCounts((prev) => {
      const current = prev[product.id] || 0;
      if (current <= 1) {
        const { [product.id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [product.id]: current - 1 };
    });
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 overflow-x-auto pb-3">
        {products.map((p) => {
          const count = counts[p.id] || 0;
          const isFav = favorites.some((f) => f.id === p.id);

          return (
            <div key={p.id} className="w-[350px] p-3 bg-white relative">
              <button
                onClick={() => toggleFavorite(p)}
                className="absolute top-3 right-3"
              >
                <FaHeart
                  size={22}
                  className={
                    isFav ? "fill-red-500 text-red-500" : "text-gray-400"
                  }
                />
              </button>

              <img
                src={p.img}
                alt={p.name}
                className="w-[210px] h-[241px] ml-10 object-contain"
              />

              <div className="w-20 bottom-16 left-3 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-md">
                Гарантия
              </div>

              <div className="mt-10">
                <p className="text-lg font-semibold">{p.price} сум</p>
              </div>

              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mt-2 mb-1">
                {p.name}
              </h3>
              <p>
                <span className="text-yellow-500 font-semibold">★4.5</span> 496
                оценок
              </p>

              {count === 0 ? (
                <button
                  onClick={() => handleAddClick(p)}
                  className="w-[267px] h-[40px] rounded-[12px] bg-[#F7F5EF] flex items-center justify-center"
                >
                  <img
                    src="/icons/basket.svg"
                    alt=""
                    className="w-[16px] h-[16px] mr-2"
                  />
                  В корзину
                </button>
              ) : (
                <div className="w-[267px] h-[40px] rounded-[12px] bg-[#F7F5EF] flex items-center justify-between px-4">
                  <button onClick={() => handleDecrease(p)} className="text-lg">
                    –
                  </button>
                  <span>{count}</span>
                  <button onClick={() => handleIncrease(p)} className="text-lg">
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
