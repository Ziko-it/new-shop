import React from "react";
import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: 458,
    status: "Ожидается оплата",
    statusColor: "bg-red-100 text-red-500",
    qty: 99999,
    date: "23.05.25 23:34",
    price: "32 405 540,90 сум",
    action: "Оплатить",
  },
  {
    id: 458,
    status: "Доставлено",
    statusColor: "bg-green-100 text-green-500",
    qty: 99999,
    date: "23.05.25 23:34",
    price: "32 405 540,90 сум",
    action: "Получено",
  },
  {
    id: 458,
    status: "Отправлено запрос",
    statusColor: "bg-orange-100 text-orange-500",
    qty: 99999,
    date: "23.05.25 23:34",
    price: "32 405 540,90 сум",
    action: null,
  },
  {
    id: 458,
    status: "Доставляется",
    statusColor: "bg-blue-100 text-blue-500",
    qty: 99999,
    date: "23.05.25 23:34",
    price: "32 405 540,90 сум",
    action: null,
  },
  {
    id: 458,
    status: "Завершено",
    statusColor: "bg-gray-100 text-gray-500",
    qty: 99999,
    date: "23.05.25 23:34",
    price: "32 405 540,90 сум",
    action: null,
  },
  {
    id: 458,
    status: "Завершено",
    statusColor: "bg-gray-100 text-gray-500",
    qty: 99999,
    date: "23.05.25 23:34",
    price: "32 405 540,90 сум",
    action: null,
  },
  {
    id: 458,
    status: "Завершено",
    statusColor: "bg-gray-100 text-gray-500",
    qty: 99999,
    date: "23.05.25 23:34",
    price: "32 405 540,90 сум",
    action: null,
  },
];

export default function OrdersPage() {
  return (
    <>
      <div className="flex  p-4">
        <main className="flex-1  rounded-2xl h-[700px]">
          <h1 className="text-xl font-semibold mb-8">Мои заказы</h1>

          <div className="flex gap-3 mb-6">
            <button className="px-4 py-2 rounded-full bg-black text-white">
              Все
            </button>
            <button className="px-4 py-2 rounded-full bg-white">
              Ждут оплаты
            </button>
            <button className="px-4 py-2 rounded-full bg-white">
              Активные
            </button>
            <button className="px-4 py-2 rounded-full bg-white">
              Завершённые
            </button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white text-gray-500 text-left h-20">
                <tr>
                  <th className="px-4 py-3">№</th>
                  <th className="px-4 py-3">ID #</th>
                  <th className="px-4 py-3">Статус</th>
                  <th className="px-4 py-3">Кол-во</th>
                  <th className="px-4 py-3">Дата и время</th>
                  <th className="px-4 py-3">Итоговая цена</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={idx} className="border-t h-15">
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="px-4 py-3">{order.id}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-4 py-2 text-xs rounded-full ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{order.qty}</td>
                    <td className="px-4 py-3">{order.date}</td>
                    <td className="px-4 py-3">{order.price}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      {order.action && (
                        <Link to="/buyurtma/opatut">
                          <button className="px-3 py-1 rounded-md bg-black text-white text-xs">
                            {order.action}
                          </button>
                        </Link>
                      )}
                      <MoreVertical size={18} className="text-gray-400" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}
