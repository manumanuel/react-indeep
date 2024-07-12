import { useState } from "react";

import { resData } from "../utils/sampleData";
import RestaurantCard from "./RestaurantCard";
9;
const BodyComponent = () => {
  let [filteredRestaurants, setFilteredRestaurants] = useState(resData);

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const result = filteredRestaurants.filter(
              (x) => x.card.card.info.avgRating > 4
            );
            setFilteredRestaurants(result);
            //console.log(result);
          }}
        >
          Top Rated only
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resCard={restaurant.card.card.info} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
