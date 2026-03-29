// Filters.js
import React, { useState } from "react";
import "./Filter.css";

const categories = ["Bags", "Shoes", "Accessories"];
const prices = ["Under $50", "$50 - $100"];

function Filters() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handlePriceChange = (price) => {
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  return (
    <aside className="filters">
      <h3>FILTERS</h3>

      <div>
        <h4>Category</h4>
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Price</h4>
        {prices.map((price) => (
          <label key={price}>
            <input
              type="checkbox"
              checked={selectedPrices.includes(price)}
              onChange={() => handlePriceChange(price)}
            />
            {price}
          </label>
        ))}
      </div>
    </aside>
  );
}

export default Filters;
