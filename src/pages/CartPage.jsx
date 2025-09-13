import { useCart } from "../assets/context/CartContext";
import Footer from "../assets/components/Footer";
export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className=" text-center mt-50 ">
        <div className="mb-40">
          <h2 className="text-xl font-bold">Hech narsa topilmadi</h2>
          <p className="text-gray-600">Hech kim savatchani bosmadi</p>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cart.map((p) => (
          <div key={p.id} className="bg-white shadow rounded-xl p-4">
            <img
              src={p.img}
              alt={p.name}
              className="w-[210px] h-[241px] object-contain mx-auto"
            />
            <p className="text-lg font-semibold mt-2">{p.price} сум</p>
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mt-1">
              {p.name}
            </h3>

            <div className="flex items-center gap-4 mt-3">
              <button
                onClick={() => decreaseQty(p.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                –
              </button>
              <span>{p.qty}</span>
              <button
                onClick={() => increaseQty(p.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(p.id)}
              className="mt-3 text-red-500 underline"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
