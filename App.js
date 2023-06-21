import React from "react"; import ReactDOM from "react-dom/client";
const headingReact = React.createElement('h1',{id:"hello"},"Namaste React")
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(headingReact)
