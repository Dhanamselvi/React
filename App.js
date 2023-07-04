import React from "react";
import ReactDOM from "react-dom/client";


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

// Functional Component
const Title = () => (
    <img alt="logo"
         className="logo"
         src = "https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
         />
)
//  React element
const title = (
    <h2>Javascript function in React Js</h2>
)

/*
JSX?
JSX creates React.createElement
React.createElement => Javascript object => HTML DOM
*/ 
const Header = () => {
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const restraurantList = [
    
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "316385",
        "name": "Sizzle Foods",
        "uuid": "60c538a1-d057-4f08-9247-25fc54aec8b6",
        "city": "8",
        "area": "Kilpauk",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "em3fnsh8gdfxifn0tbkd",
        "cuisines": [
            "Pizzas",
            "Indian",
            "Desserts",
            "Pastas"
        ],
        "tags": [
            
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 3.5999999046325684,
        "slugs": {
            "restaurant": "sizzle-foods-kilpauk-kilpauk",
            "city": "chennai"
        },
        "cityState": "8",
        "address": "NO.7,3RD CROSS STREET, SYLVAN LODGE COLONY,KILPAUK,CHENNAI, 600010 CHENNAI CORPORTION WARD 103 CHENNAI  CORP WARD 103 CHENNAI   TAMIL NADU 600010",
        "locality": "Sylvan Lodge Colony",
        "parentId": 189042,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
            
        ],
        "chain": [
            
        ],
        "feeDetails": {
            "fees": [
            {
                "name": "distance",
                "fee": 4300,
                "message": ""
            },
            {
                "name": "time",
                "fee": 0,
                "message": ""
            },
            {
                "name": "special",
                "fee": 0,
                "message": ""
            }
            ],
            "totalFees": 4300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4300",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [
            
            ],
            "textBased": [
            
            ],
            "textExtendedBadges": [
            
            ]
        },
        "lastMileTravelString": "3.5 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "exclusiveOfferMessage": ""
        },
        "sla": {
            "restaurantId": "316385",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 3.5999999046325684,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "18045",
        "name": "A2B - Adyar Ananda Bhavan",
        "uuid": "4f2f0d1c-eb37-4119-98f2-3887ea6565e0",
        "city": "8",
        "area": "T. Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mmwqluenvuuvnz4wntqm",
        "cuisines": [
            "South Indian",
            "North Indian",
            "Sweets",
            "Chinese"
        ],
        "tags": [
            
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
            "restaurant": "a2b-veg-t-nagar-t-nagar",
            "city": "chennai"
        },
        "cityState": "8",
        "address": "87, Pondy Bazaar, Thiyagaraya Road, T. Nagar, Chennai",
        "locality": "Pondy Bazaar",
        "parentId": 22,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
            
        ],
        "ribbon": [
            {
            "type": "PROMOTED"
            }
        ],
        "chain": [
            
        ],
        "feeDetails": {
            "fees": [
            {
                "name": "distance",
                "fee": 3400,
                "message": ""
            },
            {
                "name": "time",
                "fee": 0,
                "message": ""
            },
            {
                "name": "special",
                "fee": 0,
                "message": ""
            }
            ],
            "totalFees": 3400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3400",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7296910~p=28~eid=00000189-1f89-a64f-2d80-b6bc00dc1c50~srvts=1688451262031",
        "badges": {
            "imageBased": [
            
            ],
            "textBased": [
            
            ],
            "textExtendedBadges": [
            
            ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "exclusiveOfferMessage": ""
        },
        "sla": {
            "restaurantId": "18045",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 2.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "235290",
        "name": "Behrouz Biryani",
        "uuid": "65decd18-8fbc-4286-b643-2edd785dcdda",
        "city": "8",
        "area": "Arumbakkam",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "re2uyrsio6vibeqxtkdw",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "North Indian",
            "Desserts",
            "Beverages"
        ],
        "tags": [
            
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 3.9000000953674316,
        "slugs": {
            "restaurant": "behrouz-biryani-arumbakkam-arumbakkam",
            "city": "chennai"
        },
        "cityState": "8",
        "address": "No 15/90 1 St floor, NK Complex Razack Garden MMDA Main Road, Arumbakkam, Chennai 600106",
        "locality": "Razzak Garden Main Rd",
        "parentId": 1803,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
            
        ],
        "chain": [
            
        ],
        "feeDetails": {
            "fees": [
            {
                "name": "distance",
                "fee": 4300,
                "message": ""
            },
            {
                "name": "time",
                "fee": 0,
                "message": ""
            },
            {
                "name": "special",
                "fee": 0,
                "message": ""
            }
            ],
            "totalFees": 4300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4300",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [
            
            ],
            "textBased": [
            
            ],
            "textExtendedBadges": [
            
            ]
        },
        "lastMileTravelString": "3.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "exclusiveOfferMessage": ""
        },
        "sla": {
            "restaurantId": "235290",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 3.9000000953674316,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "235292",
        "name": "Firangi Bake",
        "uuid": "569fa207-f13b-4757-b559-c2922a4112ec",
        "city": "8",
        "area": "Arumbakkam",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "mrlizgrpurdryindnuus",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Mexican",
            "Healthy Food",
            "Desserts",
            "Beverages"
        ],
        "tags": [
            
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 3.9000000953674316,
        "slugs": {
            "restaurant": "firangi-bake-arumbakkam-arumbakkam",
            "city": "chennai"
        },
        "cityState": "8",
        "address": "No 15/90 1 St floor, NK Complex Razack Garden MMDA Main Road, Arumbakkam, Chennai 600106",
        "locality": "Razzak Garden Main Rd",
        "parentId": 3952,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
            
        ],
        "chain": [
            
        ],
        "feeDetails": {
            "fees": [
            {
                "name": "distance",
                "fee": 4300,
                "message": ""
            },
            {
                "name": "time",
                "fee": 0,
                "message": ""
            },
            {
                "name": "special",
                "fee": 0,
                "message": ""
            }
            ],
            "totalFees": 4300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "4300",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
            "imageBased": [
            
            ],
            "textBased": [
            
            ],
            "textExtendedBadges": [
            
            ]
        },
        "lastMileTravelString": "3.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
            "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
            },
            "freedelMessage": "FREE DELIVERY",
            "exclusiveOfferMessage": ""
        },
        "sla": {
            "restaurantId": "235292",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 3.9000000953674316,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
        },
        "subtype": "basic"
    }
]

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    id
}) =>{
    // console.log(props)
    // const {name,cuisines,cloudinaryImageId,lastMileTravelString} = restaurant.data
    return(

        /* Using props
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant.data?.cloudinaryImageId}/>
            <h2>{props.restaurant.data?.name}</h2>
            <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
            <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
        </div>
        */

        /* Using Destrcuting the props  ==> restraunt
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurant.data?.cloudinaryImageId}/>
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines.join(", ")}</h3>
            <h4>{restaurant.data?.lastMileTravelString} minutes</h4>
        </div>
        */
        
        // Using Destrucing the restraunt.data ==> name,cusines,lastMileTravelString,CloudnaryImage
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    ) 
}
const Body = () =>{
    return (
        /*
        <div className="restraurant-list">
            <RestrauntCard restaurant={restraurantList[0]} hello="world"/>
            <RestrauntCard restaurant={restraurantList[1]}/>
            <RestrauntCard restaurant={restraurantList[2]}/>
            <RestrauntCard restaurant={restraurantList[3]}/>
        </div>
        */

        /*  
        <div className="restraurant-list">
            <RestrauntCard {...restraurantList[0]} hello="world"/>
            <RestrauntCard {...restraurantList[1]}/>
            <RestrauntCard {...restraurantList[2]}/>
            <RestrauntCard {...restraurantList[3]}/>
        </div>
        */

        <div className="restraurant-list">
            {
                restraurantList.map(restaurant => {
                    return  <RestrauntCard key={restaurant.data?.id} {...restaurant.data}/>
                })
            }
        </div>
    )
}
const Footer = () => {
    return <h4>Footer</h4>
}
const AppLayout = () => {
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<AppLayout/>)
