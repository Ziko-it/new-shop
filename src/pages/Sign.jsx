import React, { useState } from "react";

export default function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <img
        src="./icons/login.png"
        alt="login"
        className="absolute top-0 left-0 w-full h-235 object-cover"
      />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 relative z-10 mt-40">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Vasit</h1>
          <p className="text-gray-500 text-sm">Войти или зарегистрироваться</p>
          <p className="text-xs text-gray-400 mt-1">
            Платформа для корпоративной торговли
          </p>
        </div>

        <div className="flex justify-center border rounded-lg overflow-hidden text-sm">
          <button className="flex-1 bg-gray-100 py-2">ЭЦП ключ</button>
          <button className="flex-1 py-2">Почта</button>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Войти
          </button>
        </form>

        <div className="text-center space-y-2">
          <button className="w-full border py-3 rounded-lg text-sm hover:bg-gray-50">
            Войти как продавец
          </button>
          <a href="#" className="block text-sm text-blue-600">
            Не могу войти
          </a>
          <a href="/" className="block text-sm text-blue-600">
            Вернуться на главную
          </a>
        </div>

        <p className="text-xs text-gray-400 text-center">© 2025 ООО “VASIT”</p>
      </div>
    </div>
  );
}
