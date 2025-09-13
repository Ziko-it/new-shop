import React, { useState } from "react";
import Footer from "../assets/components/Footer";
import Categories from "../assets/components/Categories";
import { MoreVertical } from "lucide-react";

export default function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      name: "Офис Яккасарай",
      address: "Ташкент, улица Бабура, д.69/7, кв.36",
      phone: "+998 90 123 45 67",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    familiya: "",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", address: "", phone: "", familiya: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }
    setAddresses((prev) => [...prev, formData]);
    closeModal();
  };

  return (
    <>
      <div className="flex p-4">
        {/* Sidebar */}

        {/* Main */}
        <main className="flex-1">
          <div className="bg-[#F7F5EF] p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Адреса доставки</h2>
              <button
                onClick={openModal}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                + Добавить адрес
              </button>
            </div>

            {/* Jadval */}
            <div className="space-y-4">
              {addresses.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white p-4 rounded-lg shadow-sm flex justify-between items-start hover:shadow-md transition"
                >
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.address}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Лицензия: {item.phone}
                    </p>
                  </div>
                  <div className="relative">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="mt-4 w-full py-3 border rounded-lg text-gray-600 hover:bg-gray-50 transition"
            >
              Добавить адрес доставки
            </button>
          </div>
        </main>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="flex bg-white rounded-2xl p-6 w-300 h-160 relative shadow-lg ">
            <div className="">
              <img src="./icons/map.svg" alt="" className="w-200 h-150" />
            </div>
            <div className="w-80 ">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
              <h2 className="text-xl font-semibold mb-5">
                Добавить адрес доставки
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Адрес"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Название адреса"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  name="familiya"
                  placeholder="Имя и фамилия"
                  value={formData.familiya}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <button
                onClick={handleSave}
                className="mt-6 w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
