import React from "react";
import { useParams } from "react-router-dom";
import Header from "../assets/components/Header";
import Categories from "../assets/components/Categories";
import Carousel1 from "../assets/components/Carousel1";

const products = [
  {
    id: 1,
    name: `Apple MacBook Air 15" (M4, 10C CPU/10C GPU, 2025)`,
    price: "14 890 900",
    img: "/icons/Apple MacBook Air 15.svg",
    options: ["256GB", "512GB", "1TB", "2TB"],
    specs: {
      Диагональ: '15.3"',
      Процессор: "Apple M4",
      Память: "32 ГБ",
      Хранилище: "2 ТБ SSD",
    },
  },
  {
    id: 2,
    name: `Apple Studio Display 5K, стандартное стекло`,
    price: "22 640 900",
    img: "/icons/Apple Монитор.svg",

    specs: {
      Диагональ: '27"',
      Разрешение: "5K",
      Панель: "Retina",
    },
    options: [],
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">❌ Товар не найден</h2>
    );
  }

  return (
    <>
      <Header />
      <div className="text-center mt-5">
        <Categories />
      </div>

      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        <div className="col-span-1 flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-[400px] h-[400px] object-contain border rounded-lg shadow"
          />
        </div>

        <div className="col-span-1">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-3">{product.description}</p>

          <div className="space-y-2">
            {product.specs &&
              Object.entries(product.specs).map(([key, value]) => (
                <p key={key} className="text-sm text-gray-600">
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
          </div>

          {product.options && product.options.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Доступные варианты:</p>
              <div className="flex gap-2 flex-wrap">
                {product.options.map((opt) => (
                  <button
                    key={opt}
                    className="border rounded-lg px-4 py-2 hover:bg-gray-100"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="col-span-1 border p-4 rounded-xl shadow h-fit">
          <p className="text-3xl font-bold text-black mb-4">
            {product.price} сум
          </p>
          <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Добавить в корзину
          </button>
        </div>
      </div>

      <div className="max-w-6xl  p-6">
        <h2 className="text-xl font-bold mb-3"> О товаре</h2>
        <p className="text-gray-700 mx-auto">
          Ноутбук Apple MacBook Air 13 2025 M4 16/256GB Silver (MW0W3) - это
          современное и стильное решение для работы и развлечений. Разрешение
          экрана составляет 2560x1664 пикселей, что обеспечивает четкое и я
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3"> Характеристики</h2>
        <ul className="list-disc list-inside text-gray-700">
          {product.specs &&
            Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-20">
        <div className="flex items-center min-h-scree">
          <Carousel1 />
        </div>
      </div>
    </>
  );
}
