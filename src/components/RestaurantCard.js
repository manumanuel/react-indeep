import { CLOUD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resCard } = props;
  //console.log(resCard);

  return (
    <div className="w-60 p-1 min-h-60 bg-blue-300 hover:bg-green-400  h-auto">
      <img
        className="w-30 h-30 rounded-lg"
        src={CLOUD_URL + resCard.cloudinaryImageId}
        alt="res-img"
      />
      <h3>{resCard.name}</h3>
      <h4>{resCard.cuisines.join(", ")}</h4>
      <h5>{resCard.costForTwoMessage}</h5>
      <h5>{resCard.avgRating} stars</h5>
      <h6>ETA- {resCard.sla.deliveryTime} min</h6>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="bg-black text-white rounded-lg p-1 absolute">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
