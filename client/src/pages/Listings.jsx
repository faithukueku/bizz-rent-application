import "../styles/Listings.css"
import ItemCard from "../components/ItemCard"
import { useState } from "react"
import SearchForm from "../components/SearchForm"

const Listings = ()=>{
 const [location,setLocation] = useState("Lagos")
    return (
        <div className="main-container-listing">
<div className = "listing-header">
    <h1>WorkPlaces in {location}</h1>
    <SearchForm/>
</div>
<div>
<ItemCard id={"29201219dhdj"}/>

  </div>
            
        </div>
    )
    
}


export default Listings