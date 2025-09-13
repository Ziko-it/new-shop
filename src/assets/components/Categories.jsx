import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://api.vasit.uz/api/v1/buyer/categories",
        {},
        {
          headers: {
            land: "rus",
          },
        }
      )
      .then((res) => {
        setCategories(res.data?.data || []);
      })
      .catch((err) => {
        console.error("API xatosi:", err);
      });
  }, []);

  return (
    <div className="text-center mt-5 mb-4 flex flex-wrap gap-3 justify-center">
      {categories.length > 0 ? (
        categories.map((cat) => (
          <span key={cat.id} className=" rounded-lg  cursor-pointer">
            {cat.name}
          </span>
        ))
      ) : (
        <p>Kategoriyalar yuklanmoqda...</p>
      )}
    </div>
  );
}
