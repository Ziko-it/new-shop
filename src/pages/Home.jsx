import React from "react";
import Header from "../assets/components/Header";
import Carousel from "../assets/components/Carousel";
import Carousel1 from "../assets/components/Carousel1";
import Carousel2 from "../assets/components/Carousel2";
import Carousel3 from "../assets/components/Carousel3";
import Carousel4 from "../assets/components/Carousel4";
import Categories from "../assets/components/Categories";

function Home() {
  return (
    <>
      <Header />
      <div className=" text-center mt-5">
        <Categories />
      </div>

      <main className=" px-4">
        <section className="bg-gray-100 p-8 rounded-lg mt-6 text-center ">
          <Carousel />
        </section>
        <section className="mt-8 ml-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Компьютеры.svg"
                  alt="Компьютеры"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Компьютеры и ноутбуки</span>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Хозяйственные.svg"
                  alt="Хозяйственные"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <div className="ml-20">Хозяйственные товары</div>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Бытовая.svg"
                  alt="Бытовая"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Бытовая химия</span>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Канцелярия.svg"
                  alt="Канцелярия"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Канцелярия</span>
            </div>
          </div>
        </section>
        <section className="mt-8 ml-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Продукты.svg"
                  alt="Продукты"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Продукты питания</span>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Мебель.svg"
                  alt="Мебель"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <div className="ml-20">Мебель, инструмент и декор</div>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Одежда.svg"
                  alt="Одежда"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-30">Одежда </span>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Строительство.svg"
                  alt="Строительство"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Строительство и ремонт </span>
            </div>
          </div>
        </section>
        <section className="mt-8 ml-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Детские.svg"
                  alt="Детские"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Детские товары</span>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Спорт.svg"
                  alt="Спорт"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <div className="ml-20">Спорт и отдых</div>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Красота.svg"
                  alt="Красота"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Красота и здоровье</span>
            </div>
            <div className="">
              <div className=" p-6 rounded-lg w-[338px] h-[216px] flex flex-col items-center justify-center">
                <img
                  src="/icons/Товары.svg"
                  alt="Товары"
                  className="w-[186px] h-[186px] object-contain mb-2"
                />
              </div>
              <span className="ml-20">Товары для животных</span>
            </div>
          </div>
        </section>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center min-h-scree">
            <Carousel2 />
          </div>
        </div>
        <div className="mt-60">
          <div className="flex items-center min-h-scree">
            <Carousel3 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center min-h-scree">
            <Carousel2 />
          </div>
        </div>
        <div className="mt-60">
          <div className="flex items-center min-h-scree">
            <Carousel4 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center min-h-scree">
            <Carousel2 />
          </div>
        </div>
        <div className="mt-60">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel4 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center min-h-scree">
            <Carousel1 />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
