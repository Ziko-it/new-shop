import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <>
      <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
        {children}
      </FavoritesContext.Provider>
    </>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
// zustand o'rganish stet mengment qnday foydalandi
// react context bilan ishlash
// va ikkalasing farqi qanday
// mening ertang vazifalrim
