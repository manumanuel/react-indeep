import { useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { useParams } from "react-router-dom";

//import { RESTAURANTS_URL } from "../utils/constants";
import useRestaurantMenuComponent from "../utils/useRestaurantMenuComponent";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

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
  // console.log(resToDisplay);
  const [showIndex, setShowIndex] = useState(null);
  // const [showDishes, setShowDishes] = useState(true);
  // setShowDishes(!showDishes);
  const restaurantCategories =
    resToDisplay?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(restaurantCategories);

  //console.log(resMenus);
  if (resToDisplay === null) {
    return <ShimmerComponent />;
  }
  // console.log(resToDisplay);

  return (
    <div className="m-4 text-center">
      <h3 className="font-extrabold">{resData?.name}</h3>
      <h4 className="font-semibold">
        Rating: {resData?.avgRating}- {resData?.costForTwoMessage}
      </h4>
      <h5 className="font-mono">{resData?.cuisines.join(", ")}</h5>
      <label className="font-semibold mx-2">Available Menus</label>
      {restaurantCategories.map((restaurantCategory, index) => (
        <RestaurantCategory
          key={index}
          data={restaurantCategory?.card?.card}
          showDishes={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantComponent;
