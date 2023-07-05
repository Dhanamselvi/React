import React from "react";
import ReactDOM from "react-dom/client";
// Default Import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// Named Import
import { Title } from "./components/Header";


/*
    Header
        - Logo
        - Nav Items(Right Side)
        - Cart
    Body
        - Search bar
        - RestrauntList
            - RestraunCard(many cards)
                - Image
                - Name
                - Rating
                - Cusines
    Footer
        - Links
        - Copyright
*/
const AppLayout = () => {
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout/>)
