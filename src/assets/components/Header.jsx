import { useState } from "react";
import {
  FaRegUser,
  FaHeart,
  FaShoppingCart,
  FaClipboardList,
} from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="w-full shadow bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">Vasit</div>

        <div className="flex items-center w-1/2 border rounded-full overflow-hidden">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Найти продукты"
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="bg-purple-500 text-white px-4 py-2">
            <IoSearchOutline size={20} />
          </button>
        </div>

        <div className="flex items-center gap-5 text-gray-700 text-sm">
          <div className="flex flex-col items-center cursor-pointer">
            <FaRegUser size={20} />
            <span>Войти</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaClipboardList size={20} />
            <span>Заказы</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaHeart size={20} />
            <span>Избранное</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaShoppingCart size={20} />
            <span>Корзина</span>
          </div>
        </div>
      </div>
    </header>
  );
}
