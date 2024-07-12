import { CLOUD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resCard } = props;
  //console.log(resCard);

  return (
    <div className="res-card">
      <img
        className="res-img"
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

export default RestaurantCard;
