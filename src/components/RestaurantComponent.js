//import { useState, useEffect } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";

//import { RESTAURANTS_URL } from "../utils/constants";
import useRestaurantMenuComponent from "../utils/useRestaurantMenuComponent";

const RestaurantComponent = () => {
  const { id } = useParams();
  /*
 const [resToDisplay, setResToDisplay] = useState(null);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const res_result = await fetch(RESTAURANTS_URL + id);
    const restData = await res_result.json();
    //console.log(restData.data);
    setResToDisplay(restData.data);
  };

  //console.log(resToDisplay);
  const resData = resToDisplay?.cards[2]?.card?.card?.info;
  // console.log(resData);
  */
  const resToDisplay = useRestaurantMenuComponent(id); //used this custom hook to implement SRP, by calling menu list as an independent logic

  const resData = resToDisplay?.cards[2]?.card?.card?.info;
  //console.log(resToDisplay);

  const resMenus =
    resToDisplay?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.categories.length > 0
      ? resToDisplay?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
          ?.card?.card?.categories[0].itemCards
      : resToDisplay?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
          ?.card?.card?.itemCards;
  //console.log(resMenus);
  if (resToDisplay === null) {
    return <ShimmerComponent />;
  }
  // console.log(resToDisplay);

  return (
    <div className="Menu">
      <h3>{resData?.name}</h3>
      <h4>
        Rating: {resData?.avgRating}- {resData?.costForTwoMessage}
      </h4>
      <h5 className="Cuisine">{resData?.cuisines.join(", ")}</h5>
      <label>Available Menus</label>
      <ul>
        {resMenus.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name}- Rs{" "}
            {menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};
export default RestaurantComponent;
