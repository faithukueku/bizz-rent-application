import "../styles/Listings.css"
import ItemCard from "../components/ItemCard"
import { useState } from "react"

const Listings = ()=>{
 const [location,setLocation] = useState("Lagos")
    return (
        <div className="main-container-listing">
<div>
    <h1>WorkPlaces in {location}</h1>
</div>
<div>
<ItemCard/>
  </div>
            
        </div>
    )
    
}


export default Listings