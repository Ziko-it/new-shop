import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [search, setSearch] = useState("");
  const { favorites } = useFavorites();
  const { cart } = useCart();

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/vasit">
          <div className="text-2xl font-bold text-gray-800">Vasit</div>
        </Link>

        <Link
          to="/button"
          className="w-[114px] h-[44px] bg-indigo-50 text-indigo-500 rounded-[14px] flex items-center justify-center"
        >
          <img src="/icons/Vector1.svg" alt="" className="mr-2" />
          Каталог
        </Link>

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

        <div className="flex items-center gap-5 text-sm relative">
          <Link
            to="/login"
            className="flex flex-col items-center cursor-pointer"
          >
            <img src="./icons/bivt.svg" alt="" />
            <span>Войти</span>
          </Link>
          <Link
            to="/sign"
            className="flex flex-col items-center cursor-pointer"
          >
            <img src="./icons/bivt.svg" alt="" />
            <span>Регистрация</span>
          </Link>
          <Link
            to="/buyurtma"
            className="flex flex-col items-center cursor-pointer"
          >
            <img src="./icons/kalso (1).svg" alt="" />
            <span>Заказы</span>
          </Link>

          <Link
            to="/favorites"
            className="flex flex-col items-center cursor-pointer relative"
          >
            <img src="./icons/kalso (4).svg" alt="" />
            <span>Избранное</span>
            {favorites.length > 0 && (
              <span className="absolute -top-1 right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="flex flex-col items-center cursor-pointer relative"
          >
            <img src="./icons/basket.svg" alt="" />
            <span>Корзина</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
