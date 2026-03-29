// PLPPage.jsx
import React, { useState } from "react";
import Filters from "./Filter";   // your existing Filters.js
import Footer from "./Footer";     // your existing Footer
import "./PLPPage.css";

export default function PLPPage() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="plp-page">

      {/* HEADER BAR (matches screenshot) */}
      <div className="plp-header">
        <span className="plp-items">20 ITEMS</span>

        <button
          className="plp-hide-filter"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "< HIDE FILTER" : "< SHOW FILTER"}
        </button>

        <div className="plp-sort">
          RECOMMENDED ▼
        </div>
      </div>

      {/* DISCOVER SECTION (must appear below header) */}
  
      {/* FILTERS + PRODUCT GRID */}
   
        

       
      </div>

     
    
  );
}
