import Footer from "../assets/components/Footer";
import { useFavorites } from "../assets/context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className=" text-center">
        <div className="mt-50 mb-42">
          <h2 className="text-xl font-bold">Hech narsa topilmadi</h2>
          <p className="text-gray-600">Hech kim❤️ yurakchani bosmadi</p>
        </div>
        <div className=""></div>
      </div>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {favorites.map((p) => (
        <div key={p.id} className="bg-white shadow rounded-xl p-4 relative">
          <img
            src={p.img}
            alt={p.name}
            className="w-[210px] h-[241px] object-contain mx-auto"
          />
          <p className="text-lg font-semibold mt-2">{p.price} сум</p>
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mt-1">
            {p.name}
          </h3>

          <button
            onClick={() => toggleFavorite(p)}
            className="mt-3   text-red-500 py-2 rounded-lg "
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
}
