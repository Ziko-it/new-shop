import React, { useState } from "react";
import Footer from "../assets/components/Footer";

export default function Vasit() {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (inputValue === "Azizbek Aka") {
      setShowModal(true);
    } else {
      alert("Kodni to‘g‘ri kiriting!");
    }
  };

  return (
    <>
      <header className="w-full bg-white">
        <div className="px-4 py-3 flex border-b shadow">
          <div className="text-2xl font-bold ml-50 text-gray-800">Vasit</div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto p-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="bg-[#F7F5EF] p-6 rounded-2xl">
            <h2 className="font-semibold text-lg mb-4">Способ получения</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 cursor-pointer border-b">
                <img src="/icons/Vector.svg" alt="" className="w-5 h-5" />
                <span>Добавьте адрес доставки</span>
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer border-b">
                <img src="./icons/bivt.svg" alt="" className="mr-2" />
                <span>Данные получателя</span>
              </div>
              <div className="flex items-center gap-3 p-3 cursor-pointer">
                <img src="./icons/coment.svg" alt="" className="mr-2" />
                <span>Комментарий курьеру</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F5EF] p-6 rounded-2xl">
            <h2 className="font-semibold text-lg mb-4">
              Дата и время доставки
            </h2>
            <div className="flex gap-3 overflow-x-auto">
              {["13 янв", "14 янв", "15 янв", "16 янв", "17 янв"].map(
                (day, i) => (
                  <button
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white shadow hover:bg-gray-100"
                  >
                    {day}
                  </button>
                )
              )}
            </div>
            <select className="mt-4 w-full p-3 rounded-xl border shadow">
              <option>12:00 - 23:00, без доплат</option>
              <option>09:00 - 12:00, доплата 15 000 сум</option>
            </select>
          </div>

          <div className="bg-[#F7F5EF] p-6 rounded-2xl">
            <h2 className="font-semibold text-lg mb-4">Товары</h2>
            <div className="flex gap-4">
              <img
                src="/icons/Apple MacBook Air 15.svg"
                alt="Товар"
                className="w-24 h-24 rounded-lg"
              />
              <img
                src="/icons/Apple MacBook Air 15.svg"
                alt="Товар"
                className="w-24 h-24 rounded-lg"
              />
              <img
                src="/icons/Apple MacBook Air 15.svg"
                alt="Товар"
                className="w-24 h-24 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="h-fit">
          <div className="bg-[#F7F5EF] p-6 rounded-2xl mt-6">
            <input
              type="text"
              placeholder="Введите код"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-3 border rounded-xl mb-4"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-[#6155F5] hover:bg-purple-700 text-white font-semibold rounded-xl"
            >
              Отправить запрос
            </button>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-3xl">✔</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Запрос успешно отправлен</h2>
            <p className="text-gray-600 mb-6">
              Продавец сформирует счёт для оплаты — это может занять несколько
              минут. Статус заказа вы можете отслеживать в разделе «Мои заказы».
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 bg-[#6155F5] hover:bg-purple-700 text-white font-semibold rounded-xl"
            >
              Вернуться к моим заказам
            </button>
          </div>
        </div>
      )}

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
