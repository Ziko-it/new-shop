import React, { useState } from "react";
import Categories from "../assets/components/Categories";
import Footer from "../assets/components/Footer";

export default function Sotrudniki() {
  const [employees, setEmployees] = useState([
    {
      email: "example@email.com",
      phone: "+998 99 123 45 67",
      role: "Бухгалтер",
      password: "qarz+-1245",
      show: false,
    },
    {
      email: "user1@email.com",
      phone: "+998 99 765 43 21",
      role: "Менеджер",
      password: "pass123",
      show: false,
    },
    {
      email: "user2@email.com",
      phone: "+998 99 456 78 90",
      role: "Разработчик",
      password: "devKey987",
      show: false,
    },
    {
      email: "user3@email.com",
      phone: "+998 99 321 65 43",
      role: "Дизайнер",
      password: "hidden!",
      show: false,
    },
  ]);

  // show/hide password
  const toggleShow = (index) => {
    setEmployees((prev) =>
      prev.map((emp, i) => (i === index ? { ...emp, show: !emp.show } : emp))
    );
  };

  // delete employee
  const deleteEmployee = (index) => {
    setEmployees((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex p-4">
        {/* Sidebar */}

        <main className="flex-1 bg-[#F7F5EF] rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Сотрудники</h2>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              + Добавить сотрудника
            </button>
          </div>

          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden p-4">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-4 pl-4">Почта</th>
                <th className="py-4 pl-4">Телефон</th>
                <th className="py-4 pl-4">Роль</th>
                <th className="py-4 pl-4">Пароль</th>
                <th className="py-4 pl-4 text-center">Действия</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-2 pl-4">{emp.email}</td>
                  <td className="py-2 pl-4">{emp.phone}</td>
                  <td className="py-2 pl-4">{emp.role}</td>
                  <td className="py-2 pl-4">
                    {emp.show ? emp.password : "********"}
                  </td>
                  <td className="py-2 text-center flex justify-center gap-3">
                    <button onClick={() => toggleShow(index)}>
                      <img src="./icons/eye.svg" alt="show" />
                    </button>
                    <button onClick={() => deleteEmployee(index)}>
                      <img src="./icons/trash.svg" alt="delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}
