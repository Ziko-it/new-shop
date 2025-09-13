import React from "react";

function Footer() {
  return (
    <footer className=" px-4 mt-10 pb-4">
      <div className="max-w-10xl mx-auto px-4 py-10 bg-[#F7F5EF] rounded-2xl">
        <div className="flex flex-col md:flex-row  md:justify-between mb-10">
          <p className="text-gray-700 mb-4 md:mb-0  text-2xl">
            Подпишитесь на нашу рассылку, чтобы получать <br /> самые важные
            обновления
          </p>
          <form className="flexmd:w-auto ">
            <input
              type="email"
              placeholder="your@email.com"
              className=" w-180 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition"
            >
              Подписаться
            </button>
            <p className="text-gray-600 mt-4 ">
              Отправляя свой e-mail, вы соглашаетесь с нашими Условиями <br />
              использования и Политикой конфиденциальности
            </p>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-10 mt-20 text-gray-600">
          <div>
            <h3 className="font-semibold mb-2">Vasit</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Vasit marketplace</h3>
            <ul>
              <li className="mb-1">О6 Vasit</li>
              <li className="mb-1">Связаться с нами</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Покупателям</h3>
            <ul>
              <li className="mb-1">Оплата и доставка</li>
              <li className="mb-1">Возрат товара</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Продавцам</h3>
            <ul>
              <li className="mb-1">Стать продавцом</li>
              <li className="mb-1">Нужна помощь</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-200 pt-6 text-gray-500 text-sm">
          <p>© 2025 ООО «VASIT»</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-700">
              Пользовательское соглашение
            </a>
            <span className="mx-1">/</span>
            <a href="#" className="hover:text-gray-700">
              Условиями оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
