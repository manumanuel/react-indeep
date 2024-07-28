import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      counter: 0,
    };

    console.log(this.props.name + " constructor");
  }

  render() {
    console.log(this.props.name + "  render");
    const { name, location, avatar_url } = this.props;

    return (
      <div className="emp-card">
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <img src={avatar_url} />
        <h5>Count:{this.state.counter}</h5>
        <button onClick={() => this.setState({ count: this.state.counter++ })}>
          Add
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.name + " component did mount called");
  }
}
export default UserClassComponent;
