import React from "react";
import Footer from "../assets/components/Footer";
import Categories from "../assets/components/Categories";
import { Link } from "react-router-dom";
export default function Profil() {
  return (
    <>
      <div className="flex  p-4">
        <main className="flex-1">
          <div className="bg-[#F7F5EF] p-6 rounded-2xl">
            <h2 className="text-xl font-semibold mb-6">Мой профиль</h2>

            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center font-bold text-xl">
                  IP
                </div>
                <button className="mt-2 text-sm text-purple-600 hover:underline">
                  Загрузить фотографию
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 flex-1">
                <div>
                  <label className="block text-sm text-gray-500">
                    Название компании
                  </label>
                  <div className="mt-1 p-3 bg-white rounded-lg">
                    INTOP PLANET MCHJ
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500">
                    Директор
                  </label>
                  <div className="mt-1 p-3 bg-white rounded-lg">
                    Miroxodjayev Davron Mirafzalovich
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm text-gray-500">
                    Юридический адрес
                  </label>
                  <div className="mt-1 p-3 bg-white rounded-lg">
                    Ташкент, улица Бабура, д.69/7, кв.36
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500">
                    Номер телефона
                  </label>
                  <div className="mt-1 flex items-center justify-between bg-white rounded-lg p-3">
                    <span>+998 90 123 45 67</span>
                    <button className="text-sm text-purple-600 hover:underline">
                      изменить
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-500">Почта</label>
                  <div className="mt-1 flex items-center justify-between bg-white rounded-lg p-3">
                    <span className="text-gray-400">example@email.com</span>
                    <button className="text-sm text-purple-600 hover:underline">
                      изменить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
