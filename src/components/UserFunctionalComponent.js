import { useEffect } from "react";

const UserFunctionalComponent = ({ name, location }) => {
  useEffect(() => {
    console.log("function useEffect called");

    timer = setInterval(() => {
      console.log("Functional user");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Functional user unmount");
    };
  });

  return (
    <div className="emp-card">
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
    </div>
  );
};

export default UserFunctionalComponent;
