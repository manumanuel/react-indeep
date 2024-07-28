// const AboutUsComponent = () => {
//   return (
//     <div>
//       <h4>About us</h4>
//     </div>
//   );
// };
import React from "react";
import UserFunctionalComponent from "./UserFunctionalComponent";
import UserClassComponent from "./UserClassComponent";

/*
const AboutUsComponent = () => (
  <div>
    <h4>About us</h4>
    {
      <UserFunctionalComponent
        name={"manu manuel (ftn)"}
        location={"ernakulam"}
      />
    }
    <UserClassComponent name={"manu manuel (cls)"} location={"n paravur"} />
  </div>
);

*/

/* Modify component as class based to understand life cycle methods */

class AboutUsComponent extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
    this.state = {
      userProfile: {
        name: "enter name",
        location: "enter location",
        avatar_url: "image link",
      },
    };
  }

  render() {
    console.log("Parent render");
    const { name, location, avatar_url } = this.state.userProfile;
    return (
      <div>
        <h4>About us</h4>
        <UserClassComponent
          name={name}
          location={location}
          // avatar_url={avatar_url}
        ></UserClassComponent>
        {/* <UserClassComponent
          name={name}
          location={location}
        ></UserClassComponent> */}
        <UserFunctionalComponent name={name} location={location} />
      </div>
    );
  }
  async componentDidMount() {
    // debugger;
    console.log("Parent component did mount called");
    const userInfo = await fetch("https://api.github.com/users/manumanuel");
    const userData = await userInfo.json();
    this.setState({ userProfile: userData });
    console.log(this.state.userProfile);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component will unmount is called");
  }
}

export default AboutUsComponent;
