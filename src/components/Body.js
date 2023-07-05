import { useState } from "react"
import { restraurantList } from "../constant"
import RestrauntCard from "./RestrauntCard"
const Body = () =>{
    const [searchTxt,setSearchTxt] = useState("KFC");
    const [restraurants,setRestraurants] = useState(restraurantList)
    const filteredData = (searchTxt,restraurants) =>{
        const filterData = restraurants.filter(restraurant=>restraurant.data.name.toLowerCase().includes(searchTxt))
        return filterData
    }
    return (
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
                const data = filteredData(searchTxt,restraurants)
                // update the restraurantList
                setRestraurants(data)
            }}>
                    Search
            </button>
            <h2>{searchTxt}</h2>
            <div className="restraurant-list">
                {
                    restraurants.map(restaurant => {
                        return  <RestrauntCard key={restaurant.data?.id} {...restaurant.data}/>
                    })
                }
            </div>
        </>

    )
}
export default Body