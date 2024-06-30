/*
<div id="parent">
    <div id="child">
    <h1> First sec</h1>
    <h2> Second Sec</h2>
    </div>
</div>
*/

import React from "react";
import ReactDOM from "react-dom/client";

const nested = [
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "First Sec"),
      React.createElement("h2", {}, "Second Sec"),
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "First Sec"),
      React.createElement("h2", {}, "Second Sec"),
    ]),
  ]),
];
console.log(nested);

const element = React.createElement(
  "h1",
  { id: "header" },
  "Hello world from React"
);
console.log(element);

const jsxHeading = <h1 id="header">Hello world from JSX</h1>;
console.log(jsxHeading);

const HeadingComponent = () => {
  return <h3>Heading added as a component</h3>;
};

const Heading2Component = () => (
  <div id="container">
    <HeadingComponent />
    <HeadingComponent />
    <HeadingComponent />
    <HeadingComponent />
    <h3>Heading added as component without return statement</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(element);
//root.render(nested);

root.render(<Heading2Component />);
