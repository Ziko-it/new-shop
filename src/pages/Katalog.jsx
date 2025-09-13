import React, { useState } from "react";
import Categories from "../assets/components/Categories";
import Carousel5 from "../assets/components/Carousel5";
import Footer from "../assets/components/Footer";

function Katalog() {
  const [delivery, setDelivery] = useState("");
  const [belowMarket, setBelowMarket] = useState(false);
  const [highRating, setHighRating] = useState(false);

  const brands = ["Apple", "HP", "Asus", "Dell", "Lenovo"];
  const [selectedBrands, setSelectedBrands] = useState([]);

  const powers = ["5-10 Вт", "11-20 Вт", "21-50 Вт", "51-100 Вт", "<5 Вт"];
  const [selectedPowers, setSelectedPowers] = useState([]);

  const features = ["FM-радио", "11-20 Вт", "21-50 Вт", "51-100 Вт", "<5 Вт"];
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const featuress = ["FM-радио", "11-20 Вт", "21-50 Вт", "51-100 Вт", "<5 Вт"];
  const [selectedFeaturess, setSelectedFeaturess] = useState([]);

  const colors = ["Белый", "Серый", "Черный", "Синий", "Голубой"];
  const [selectedColor, setSelectedColor] = useState("");

  const [wholesale, setWholesale] = useState(false);
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const togglePower = (power) => {
    setSelectedPowers((prev) =>
      prev.includes(power) ? prev.filter((p) => p !== power) : [...prev, power]
    );
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="">
      <div className="text-center mt-5">
        <Categories />
      </div>
      <div className="flex">
        <div className="w-[350px] h-[2001px] px-4 py-5">
          <p className="mb-2 font-bold">Все категории</p>
          <p className="mb-2">Мобильные телефоны</p>
          <p className="mb-2">Кнопочные телефоны</p>
          <p className="mb-2">Наушники и гарнитуры</p>
          <p className="mb-2">Аксессуары для смартфонов</p>
          <p className="mb-2">Аксессуары для смарт-часов</p>
          <p className="mb-6 text-gray-400">Ещё 8</p>

          <p className="mb-2">Цена, сум</p>
          <button className="w-[129px] h-[40px] border text-gray-400 rounded-[12px] mr-1">
            От 1 000
          </button>
          <button className="w-[129px] h-[40px] border text-gray-400 rounded-[12px]">
            До 90 000 000
          </button>

          <div className=" bg-white rounded-lg  w-80">
            <div className="mb-6">
              <p className="font-medium mt-1 mb-2">Сроки доставки</p>
              {["1-4 часа", "Сегодня", "Сегодня или завтра", "Любой"].map(
                (option) => (
                  <label key={option} className="flex items-center mb-2 ">
                    <input
                      type="radio"
                      name="delivery"
                      value={option}
                      checked={delivery === option}
                      onChange={() => setDelivery(option)}
                      className="mr-2 w-4 h-4 text-blue-600 accent-blue-600"
                    />
                    {option}
                  </label>
                )
              )}
            </div>

            <div className="mb-6 space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-800">Ниже рынка</span>
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                    belowMarket ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setBelowMarket(!belowMarket)}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
                      belowMarket ? "translate-x-5" : ""
                    }`}
                  />
                </div>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-800">Оптовая цена</span>
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                    wholesale ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setWholesale(!wholesale)}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
                      wholesale ? "translate-x-5" : ""
                    }`}
                  />
                </div>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-800">Высокий рейтинг</span>
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                    highRating ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setHighRating(!highRating)}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
                      highRating ? "translate-x-5" : ""
                    }`}
                  />
                </div>
              </label>
            </div>

            <div className="mb-6">
              <p className="font-medium  mb-2">Бренд</p>
              {brands.map((brand) => (
                <label key={brand} className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="mr-2 w-4 h-4 accent-blue-600"
                  />
                  {brand}
                </label>
              ))}
              <button className="text-gray-400 text-sm mt-1">Еще 8</button>
            </div>

            <div className="mb-6">
              <p className="font-medium  mb-2">Суммарная мощность</p>
              {powers.map((power) => (
                <label key={power} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedPowers.includes(power)}
                    onChange={() => togglePower(power)}
                    className="mr-2 w-4 h-4 accent-blue-600"
                  />
                  {power}
                </label>
              ))}
              <button className="text-gray-400 text-sm mt-1">Еще 1</button>
            </div>

            <div className="mb-6">
              <p className="font-medium  mb-2">Особенности</p>
              {features.map((feature) => (
                <label key={feature} className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                    className="mr-2 w-4 h-4 accent-blue-600"
                  />
                  {feature}
                </label>
              ))}
              <button className="text-gray-400 text-sm mt-1">Еще 1</button>
            </div>

            <div className="mb-6">
              <p className="font-medium  mb-2">Цвет</p>
              {colors.map((color) => (
                <label key={color} className="flex items-center mb-2 ">
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    checked={selectedColor === color}
                    onChange={() => setSelectedColor(color)}
                    className="mr-2 w-4 h-4 accent-blue-600"
                  />
                  {color}
                </label>
              ))}
              <button className="text-gray-400 text-sm mt-1">Еще 13</button>
            </div>
            <div className="mb-6">
              <p className="font-medium  mb-2">Особенности</p>
              {features.map((feature) => (
                <label key={features} className="flex items-center mb-2 ">
                  <input
                    type="checkbox"
                    checked={selectedFeaturess.includes(feature)}
                    onChange={() => toggleFeaturess(feature)}
                    className="mr-2 w-4 h-4 accent-blue-600"
                  />
                  {feature}
                </label>
              ))}
            </div>

            <button className="w-full py-2 bg-[#F7F5EF] rounded-lg font-medium hover:bg-blue-700 transition">
              Все фильтры
            </button>
          </div>
        </div>

        <div className="h-full w-full px-4 py-5">
          <div className="font-semibold">Компьютеры и ноутбуки</div>
          <button className="bg-[#F7F5EF] w-[127px] h-[40px] rounded-2xl mt-4 mb-2">
            Популярные
          </button>
          <div className="mt-10">
            <Carousel5 />
            <Carousel5 />
            <Carousel5 />
            <Carousel5 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Katalog;
