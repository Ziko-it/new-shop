import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "../assets/components/Footer";
import Categories from "../assets/components/Categories";

export default function Leyavut() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <div className="mb-4">
        <Categories />
      </div>

      <div className="flex p-4">
        <aside className="w-64 bg-[#F7F5EF] p-4 mr-10 h-[520px] flex flex-col gap-4 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-bold">
              IP
            </div>
            <span className="font-medium">INTOP PLANET MCHJ</span>
          </div>

          <nav className="flex flex-col gap-2">
            <Link to="">
              <button className="px-3 py-2 rounded-lg bg-purple-100 text-purple-600 text-left flex items-center">
                <img src="./icons/kalso (1).svg" alt="" className="mr-2" />
                Заказы
              </button>
            </Link>
            <Link to="addresses">
              <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-left flex items-center">
                <img src="/icons/map-pin.svg" alt="" className="mr-2" />
                Мои адреса
              </button>
            </Link>
            <Link to="profil">
              <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-left flex items-center">
                <img src="./icons/bivt.svg" alt="" className="mr-2" />
                Мой профиль
              </button>
            </Link>
            <Link to="sotrudniki">
              <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-left flex items-center">
                <img src="./icons/users.svg" alt="" className="mr-2" />
                Сотрудники
              </button>
            </Link>
            <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-left flex items-center">
              <img src="./icons/clockwise.svg" alt="" className="mr-2" />
              Возвраты
            </button>
            <button className="px-3 py-2 rounded-lg hover:bg-gray-100 text-left flex items-center">
              <img src="./icons/support.svg" alt="" className="mr-2" />
              Поддержка
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-2 rounded-lg hover:bg-gray-100 text-left flex items-center"
            >
              <img src="../icons/door-open.svg" alt="" className="mr-2" />
              Выйти
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-[#F7F5EF] rounded-2xl h-screen overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/30
 bg-opacity-50 z-50"
        >
          <div className="bg-white rounded-2xl p-6 w-[400px] text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src="../icons/door-open.svg"
                alt="logout"
                className="w-12 h-12 text-red-500"
              />
            </div>
            <h2 className="text-lg font-semibold mb-4">
              Вы уверены, что хотите выйти из системы?
            </h2>
            <div className="flex justify-around mt-4">
              <button
                onClick={handleLogout}
                className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Выйти
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                Остаться
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
