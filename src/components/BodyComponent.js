import { useState, useEffect } from "react";

import { resData } from "../utils/sampleData";
import RestaurantCard from "./RestaurantCard";
import ShimmerComponent from "./ShimmerComponent";

const BodyComponent = () => {
  let [listedRestaurants, setListedRestaurants] = useState([]);
  let [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const loadRestaurants = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=9.9312328&lng=76.26730409999999&str=Chicken%20Biryani&trackingId=undefined&submitAction=ENTER&queryUniqueId=74ac7a6e-0bee-06d7-b24a-adac26b3222f&selectedPLTab=RESTAURANT"
    );
    const resJson = await loadRestaurants.json();
    // console.log(
    //   resJson.data.cards[0].groupedCard.cardGroupMap.RESTAURANT.cards
    // );
    setListedRestaurants(
      resJson?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setFilteredRestaurants(
      resJson?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  //conditional rendering
  // if (filteredRestaurants.length === 0) {
  //   return <ShimmerComponent />;
  // }

  return filteredRestaurants.length === 0 ? (
    <ShimmerComponent />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchRestaurant}
          onChange={(e) => {
            setSearchRestaurant(e.target.value);
          }}
        />
        <button
          className="filter-btn"
          onClick={() => {
            filteredRestaurants = listedRestaurants.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const result = listedRestaurants.filter(
              (x) => x.card.card.info.avgRating > 4.5
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
