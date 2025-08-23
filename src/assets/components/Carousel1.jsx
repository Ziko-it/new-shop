import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: `Apple MacBook Air 15" (M4, 10C CPU/10C GPU, 2025), 32 ГБ, 2 ТБ SSD, 70W, «полуночный черный»`,
    price: "14 890 900",
    img: "/icons/Apple MacBook Air 15.svg",
  },
  {
    id: 2,
    name: `Apple Монитор Studio Display 5K, стандартное стекло, подставка с регулируемым наклоном`,
    price: "22 640 900",
    img: "/icons/Apple Монитор.svg",
  },
  {
    id: 3,
    name: `Apple Mac Studio (M3 Ultra, 2025) 256 ГБ, 4 ТБ SSD`,
    price: "28 890 900",
    img: "/icons/Apple Mac Studio.svg",
  },
  {
    id: 4,
    name: `Apple MacBook Air 15" (M4, 10C CPU/10C GPU, 2025), 32 ГБ, 2 ТБ SSD, 70W, «полуночный черный»`,
    price: "14 890 900",
    img: "/icons/Apple.svg",
  },
  {
    id: 5,
    name: `Клавиатура Keychron B6 Pro, зеленый`,
    price: "14 890 900",
    img: "/icons/Клавиатура.svg",
  },
  {
    id: 6,
    name: `Клавиатура Keychron B6 Pro, зеленый`,
    price: "14 890 900",
    img: "/icons/Клавиатура.svg",
  },
];

export default function Carousel() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Все для вашего нового сотрудника
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[220px] p-3 bg-white rounded-2xl shadow cursor-pointer relative"
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-[180px] h-[200px] mx-auto object-contain"
            />

            <div className="absolute bottom-16 left-3 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-md">
              Гарантия
            </div>

            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mt-4 mb-1">
              {p.name}
            </h3>
            <p className="text-lg font-semibold">{p.price} сум</p>
          </div>
        ))}
      </div>
    </div>
  );
}
