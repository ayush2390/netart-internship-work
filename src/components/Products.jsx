import React from "react";
import product from "../asserts/3.png";

const Products = () => {
  return (
    <div className="products">
      <div>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION OF UNITS POWER FOR THE
        NATION.
      </div>
      <div>
        <img src={product} alt="products" />
      </div>
      <div>
        Valves - Pumps - Pipes - IoT Drivers & Controllers - Wires & Cables -
        Solar Systems - Motors
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Products;
