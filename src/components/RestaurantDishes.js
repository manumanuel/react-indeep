import { CLOUD_URL } from "../utils/constants";

const RestaurantDishes = ({ dishes }) => {
  // console.log(dishes);
  return (
    <div>
      {dishes.map((dish) => (
        <div
          key={dish?.card?.info?.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="font-sans text-sm">
              <span>{dish?.card?.info?.name.toUpperCase()}</span> <br />
              <span>
                Price: ₹{" "}
                {dish?.card?.info?.defaultPrice
                  ? dish?.card?.info?.defaultPrice / 100
                  : dish?.card?.info?.price / 100}
              </span>
            </div>
            <p className="font-extralight">{dish?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative">
            <div className="absolute right-0 bottom-0">
              <button className="bg-black text-white px-2 text-centre text-xs ">
                Add +
              </button>
            </div>
            <img src={CLOUD_URL + dish?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantDishes;
