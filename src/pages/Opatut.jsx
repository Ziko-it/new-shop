import React from "react";

export default function Opatut() {
  return (
    <div className="space-y-6 p-4">
      <section className="bg-[#FAFAF9] rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Общие детали</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between">
            <span>Код банка получателя</span>
            <span className="text-gray-600">4398</span>
          </li>
          <li className="flex justify-between">
            <span>Счёт получателя</span>
            <span className="text-gray-600">4393828067</span>
          </li>
          <li className="flex justify-between">
            <span>Наименование получателя</span>
            <span className="text-gray-600">ООО Intop Planet</span>
          </li>
          <li className="flex justify-between">
            <span>ИНН получателя</span>
            <span className="text-gray-600">4393828067</span>
          </li>
          <li className="flex justify-between">
            <span>Детали платежа</span>
            <span className="text-gray-600">4393828067</span>
          </li>
        </ul>
      </section>

      <section className="bg-[#FAFAF9] rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Документы</h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src="/icons/Apple MacBook Air 15.svg"
                alt="doc"
                className="w-full h-24 object-contain bg-gray-50"
              />
              <div className="p-2 text-xs text-gray-600">
                <p>Container/chassis-out-picture.doc</p>
                <p>Отправлено: 07.23.2022 • 15:13:22</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FAFAF9] rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Комментарии</h2>
        <p className="text-sm text-gray-600">
          Подпишитесь на нашу рассылку, чтобы получать самые важные обновления
        </p>
      </section>

      <section className="bg-[#FAFAF9] rounded-2xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-3">Товары</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">№</th>
              <th>Img</th>
              <th>Inn</th>
              <th>Кол-во</th>
              <th>Итоговая цена</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-2">{i + 1}</td>
                <td>
                  <img
                    src="/icons/Apple MacBook Air 15.svg"
                    alt="product"
                    className="w-12 h-12 object-contain"
                  />
                </td>
                <td>4589990</td>
                <td>1</td>
                <td>32 405 540,90 сум</td>
                <td>
                  <span className="text-green-600 bg-green-100 px-2 py-1 rounded-md text-xs">
                    Принято
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
