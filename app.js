/*
<div id="parent">
    <div id="child">
    <h1> First sec</h1>
    <h2> Second Sec</h2>
    </div>
</div>
*/

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
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(element);
root.render(nested);
