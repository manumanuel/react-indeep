import { useState, useEffect } from "react";

import { RESTAURANTS_URL } from "./constants";

const useRestaurantMenuComponent = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const menuList = await fetch(RESTAURANTS_URL + resId);
    const menuData = await menuList.json();
    //console.log(menuData);
    setMenu(menuData.data);
  };

  return menu;
};

export default useRestaurantMenuComponent;
