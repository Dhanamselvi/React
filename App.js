import React from "react";
import ReactDOM from "react-dom/client";

const headingReact = React.createElement(
    'div',
    {id:"hello"},
    [
        React.createElement(
            'h1',
            {key:"heading"},
            "ReactJs"
        ),
        React.createElement(
            'ul',
            {key:"unorderedList"},
            [
                React.createElement(
                    'li',
                    {key:"about"},
                    "About Us"
                ),
                React.createElement(
                    'li',
                    {key:"support"},
                    "Support Us"
                ),
            ]
        )
    ])
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(headingReact)
