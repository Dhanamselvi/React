import { useEffect, useState } from "react"
import RestrauntCard from "./RestrauntCard"

const filteredData = (searchTxt,restraurants) =>{
    const filterData = restraurants.filter(restraurant=>restraurant.data.name.toLowerCase().includes(searchTxt))
    return filterData
}
const Body = () =>{
    const [searchTxt,setSearchTxt] = useState("");
    const [filteredRestraurants,setFilteredRestraurants] = useState([]);
    const [allRestraurants,setAllRestraurants] = useState([]);
    
    useEffect(()=>{
        // API call
        getRestrauants();
    },[])
    async function getRestrauants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.060833&lng=80.23941&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        // Optional Chaining
        setFilteredRestraurants(json?.data?.cards[2]?.data?.data.cards);
        setAllRestraurants(json?.data?.cards[2]?.data?.data.cards);
    }
    // not render components (Early return)
    if(!allRestraurants) return null;
    //Conditional Rendering
    return allRestraurants.length === 0 ? (
        <div><h2>Shimmer UI</h2></div> 
        ) : (
        <>
            <input
                type="text"
                className="search-input"
                placeholder=""
                value={searchTxt}
                onChange={(e)=>setSearchTxt(e.target.value)}
            />
            <button type="button" onClick={()=>{
                // need to filter the data
                const data = filteredData(searchTxt,allRestraurants)
                // update the restraurantList
                setFilteredRestraurants(data)
            }}>
                    Search
            </button>
            <h2>{searchTxt}</h2>
            <div className="restraurant-list">
                {
                filteredRestraurants.length === 0 ? <h2>No Restraunts Matches</h2> :
                filteredRestraurants.map(restaurant => {
                        return  <RestrauntCard key={restaurant.data?.id} {...restaurant.data}/>
                    })
                }
            </div>
        </>

    )
}
export default Body