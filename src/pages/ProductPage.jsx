import React from "react";
import { useParams } from "react-router-dom";
import Header from "../assets/components/Header";
import Categories from "../assets/components/Categories";
import Carousel1 from "../assets/components/Carousel1";

const products = [
  {
    id: 1,
    name: `Ноутбук Apple MacBook Air 13 2025 M4 16/256GB Silver (MW0W3)`,
    price: "14 890 900",
    img: "/icons/Apple MacBook Air 15.svg",
    options: ["256GB", "512GB", "1TB"],
    options1: ["16GB", "24TB", "32TB"],
    specs: {
      Артикул: '4393882067"',
      Диагональэкрана: "13.6",
      Разрешениеэкрана: "2560x1664",
      Процессор: "Apple M4",
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
      <div className="text-center mt-5">
        <Categories />
      </div>

      <div className="w-[1400px] h-[800px] ml-80 flex gap-[10px] p-6 mt-10">
        <div className="w-[64px] h-[388px] mt-10 ">
          <img src="/icons/Thumbnail1.svg" alt="" className="mb-5" />
          <img src="/icons/Thumbnail2.svg" alt="" className="mb-5" />
          <img src="/icons/Thumbnail3.svg" alt="" className="mb-5" />
          <img src="/icons/Thumbnail4.svg" alt="" className="mb-5" />
        </div>
        <div className="flex-shrink-0">
          <img
            src={product.img}
            alt={product.name}
            className="w-[400px] h-[400px] object-contain rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p>
            ★ <span className="text-yellow-500 font-semibold">4.5</span>496
            оценок
          </p>

          <p className="mt-2">Цвет</p>
          <div className="flex">
            <div className="bg-[#EEEFF1] border rounded-[30px] w-[20px] h-[20px] mr-2"></div>
            <div className="bg-black border rounded-[30px] w-[20px] h-[20px] mr-2"></div>
            <div className="bg-[#A7C1D9] border rounded-[30px] w-[20px] h-[20px] mr-2"></div>
            <div className="bg-[#F1F2ED] border rounded-[30px] w-[20px] h-[20px] mr-2"></div>
          </div>
          {product.options && product.options.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Объем SSD</p>
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
          {product.options1 && product.options1.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold mb-2">ОЗУ</p>
              <div className="flex gap-2 flex-wrap">
                {product.options1.map((opt) => (
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
          <div className="space-y-2 mt-4">
            {product.specs &&
              Object.entries(product.specs).map(([key, value]) => (
                <p key={key} className="text-sm text-gray-600">
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}
          </div>
        </div>

        <div className="w-[360px]">
          <div className="bg-[#F7F5EF] border p-4 rounded-xl">
            <div className="mb-4 flex">
              <p className="text-3xl font-bold text-black">
                {product.price} сум
              </p>
              <p className="text-gray-400 line-through">15 600 900 сум</p>
            </div>

            <div className="flex gap-2 mb-4">
              <button className="relative px-3 py-2 border text-sm rounded-lg">
                От 5 шт
                <span className="absolute -top-2 -right-2 bg-green-500 border border-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  -7%
                </span>
              </button>

              <button className="relative px-4 py-2 border text-sm rounded-lg">
                От 10 шт
                <span className="absolute -top-2 -right-2 bg-green-500 border border-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  -15%
                </span>
              </button>

              <button className="relative px-3 py-2 border text-sm rounded-lg">
                От 20 шт
                <span className="absolute -top-2 -right-2 bg-green-500 border border-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  -30%
                </span>
              </button>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl font-semibold mb-3">
              Добавить в корзину
            </button>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <img src="/icons/credit-card.svg" alt="" className="w-4 h-4" />
                Корпоративная карта
              </span>
              <span className="flex items-center gap-1">
                <img src="/icons/E-icon.svg" alt="" className="w-4 h-4" />
                E-imzo
              </span>
              <span className="flex items-center gap-1">
                <img src="/icons/E-icon.svg" alt="" className="w-4 h-4" />С НДС
              </span>
              <span className="flex items-center gap-1">По договору</span>
              <span className="flex items-center gap-1">
                <img src="/icons/E-icon.svg" alt="" className="w-4 h-4" />
                По договору
              </span>
            </div>
          </div>

          <button className="w-full mt-4 bg-[#F7F5EF] text-black py-3 rounded-xl  mb-4">
            Купить в один клик
          </button>

          <div className="pt-3 mt-3">
            <h3 className="font-bold mb-2">FAQ</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Условия доставки</span>
              <span>Возврат товаров</span>
              <span>Способы оплаты</span>
              <span>Кто может оформить</span>
              <span>Возврат денег</span>
            </div>
          </div>

          <div className="pt-3 mt-3 bg-[#F7F5EF] border p-4 rounded-xl">
            <h3 className="font-bold mb-2">Информация о доставке</h3>

            <p className="text-sm text-gray-700 flex items-center gap-2">
              <img src="/icons/map-pin.svg" alt="" className="w-4 h-4" />
              Ташкент, Узбекистан <br />
              Со склада продавца
            </p>

            <p className="border-t pt-3 mt-3 text-sm text-gray-700 flex items-center gap-2">
              <img src="/icons/Vector.svg" alt="" />
              Курьером VASIT <br /> Понедельник, 21 июля
            </p>
          </div>

          <div className="pt-3 mt-3 flex items-center gap-3 bg-[#F7F5EF] border p-4 rounded-xl">
            <img src="/icons/Store logo.svg" alt="" className="w-10 h-10" />
            <div>
              <p className="font-semibold">KH Digital</p>
              <p className="text-sm text-gray-600">
                Магазин ★ 4.5 • 496 отзывов
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-6">
        <h2 className="text-xl font-bold mb-3"> О товаре</h2>
        <p className="text-gray-700 ml-80">
          Ноутбук Apple MacBook Air 13 2025 M4 16/256GB Silver (MW0W3) - это
          <br />
          современное и стильное решение для работы и развлечений. <br />
          Разрешение экрана составляет 2560x1664 пикселей, что обеспечивает
          четкое и я
        </p>
        <button className="w-[219px] h-[50px] bg-[#F7F5EF] rounded-2xl text-center ml-80 mt-4">
          Показать полностью
        </button>
        <h2 className="text-xl font-bold mt-8 mb-3"> Характеристики</h2>
        <ul className="list-none text-gray-700 ml-80">
          {product.specs &&
            Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold">{key}:</span> {value}
              </li>
            ))}
        </ul>
        <button className="w-[219px] h-[50px] bg-[#F7F5EF] rounded-2xl text-center ml-80 mt-4">
          Все характеристики
        </button>
        <div className=""></div>
        <h2 className="text-xl font-bold mb-3">Отзывы о товаре</h2>
        <div className="w-[840px] h-[1044px] ml-80">
          <div className=" flex">
            <div className="w-[48px] h-[40px] rounded-full bg-amber-300 flex items-center justify-center">
              ФД
            </div>
            <div>
              ФД Digital
              <div className="">★ ★ ★ ★ ★ 24 июля</div>
            </div>
          </div>
          <div className="flex mt-2 mb-2">
            <img src="/icons/image1.svg" className="mr-2" />
            <img src="/icons/image2.svg " className="mr-2" />
            <img src="/icons/image3.svg" className="mr-2" />
            <img src="/icons/image4.svg" className="mr-2" />
          </div>

          <p className="mb-4">
            Достоинства: Вполне качественный блок по вменяемой цене особенно
            если ты в экосистеме и у тебя есть баллы плюса, купил я его вообще
            за 300 рублей, но даже за фулл прайс ты получишь качественный и
            компактный GaN зарядник на 35W.
          </p>
          <div className=" flex">
            <div className="w-[48px] h-[40px] rounded-full bg-amber-300 flex items-center justify-center">
              ФД
            </div>
            <div>
              ФД Digital
              <div className="">★ ★ ★ ★ ★ 24 июля</div>
            </div>
          </div>
          <div className="flex mt-2 mb-2">
            <img src="/icons/image1.svg" className="mr-2" />
            <img src="/icons/image2.svg " className="mr-2" />
            <img src="/icons/image3.svg" className="mr-2" />
            <img src="/icons/image4.svg" className="mr-2" />
          </div>

          <p className="mb-4">
            Достоинства: Вполне качественный блок по вменяемой цене особенно
            если ты в экосистеме и у тебя есть баллы плюса, купил я его вообще
            за 300 рублей, но даже за фулл прайс ты получишь качественный и
            компактный GaN зарядник на 35W.
          </p>
          <div className=" flex">
            <div className="w-[48px] h-[40px] rounded-full bg-amber-300 flex items-center justify-center">
              ФД
            </div>
            <div>
              ФД Digital
              <div className="">★ ★ ★ ★ ★ 24 июля</div>
            </div>
          </div>
          <div className="flex mt-2 mb-2">
            <img src="/icons/image1.svg" className="mr-2" />
            <img src="/icons/image2.svg " className="mr-2" />
            <img src="/icons/image3.svg" className="mr-2" />
            <img src="/icons/image4.svg" className="mr-2" />
          </div>

          <p className="mb-4">
            Достоинства: Вполне качественный блок по вменяемой цене особенно
            если ты в экосистеме и у тебя есть баллы плюса, купил я его вообще
            за 300 рублей, но даже за фулл прайс ты получишь качественный и
            компактный GaN зарядник на 35W.
          </p>
          <div className=" flex">
            <div className="w-[48px] h-[40px] rounded-full bg-amber-300 flex items-center justify-center">
              ФД
            </div>
            <div>
              ФД Digital
              <div className="">★ ★ ★ ★ ★ 24 июля</div>
            </div>
          </div>
          <div className="flex mt-2 mb-2">
            <img src="/icons/image1.svg" className="mr-2" />
            <img src="/icons/image2.svg " className="mr-2" />
            <img src="/icons/image3.svg" className="mr-2" />
            <img src="/icons/image4.svg" className="mr-2" />
          </div>

          <p className="mb-4">
            Достоинства: Вполне качественный блок по вменяемой цене особенно
            если ты в экосистеме и у тебя есть баллы плюса, купил я его вообще
            за 300 рублей, но даже за фулл прайс ты получишь качественный и
            компактный GaN зарядник на 35W.
          </p>
          <div className=" flex">
            <div className="w-[48px] h-[40px] rounded-full bg-amber-300 flex items-center justify-center">
              ФД
            </div>
            <div>
              ФД Digital
              <div className="">★ ★ ★ ★ ★ 24 июля</div>
            </div>
          </div>
          <div className="flex mt-2 mb-2">
            <img src="/icons/image1.svg" className="mr-2" />
            <img src="/icons/image2.svg " className="mr-2" />
            <img src="/icons/image3.svg" className="mr-2" />
            <img src="/icons/image4.svg" className="mr-2" />
          </div>

          <p className="mb-4">
            Достоинства: Вполне качественный блок по вменяемой цене особенно
            если ты в экосистеме и у тебя есть баллы плюса, купил я его вообще
            за 300 рублей, но даже за фулл прайс ты получишь качественный и
            компактный GaN зарядник на 35W.
          </p>
          <button className="w-[219px] h-[50px] bg-[#F7F5EF] rounded-2xl   mt-4">
            Показать ещё
          </button>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center min-h-scree">
          <Carousel1 />
        </div>
      </div>
    </>
  );
}
