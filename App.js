import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
const Title = () => (
    <h1 id="title" key="h2">Vanakkam ReactJs</h1>
)
//  JSX element
const title = (
    <h2>Javascript function in React Js</h2>
)
const HeaderComponent = () => {
    return(
        <>
            {title}
            <Title/>
            {Title()}
            <h2>This is React Js Learnig</h2>
        </>
    )
}
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeaderComponent/>)
