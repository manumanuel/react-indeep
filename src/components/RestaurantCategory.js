import { useState } from "react";
import RestaurantDishes from "./RestaurantDishes";

const RestaurantCategory = ({ data, showDishes, setShowIndex }) => {
  //console.log(data);

  //const [showDishes, setShowDishes] = useState(false);

  const handleClick = () => {
    // setShowDishes(!showDishes);
    setShowIndex();
  };

  return (
    <div className="w-6/12 m-3 mx-auto p-2 shadow-lg bg-gray-300">
      <div>
        <div
          className="flex justify-between font-mono text-lg"
          onClick={handleClick}
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showDishes && <RestaurantDishes dishes={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
