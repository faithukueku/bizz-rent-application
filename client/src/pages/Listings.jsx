import "../styles/Listings.css"
import ItemCard from "../components/ItemCard"
import { useState ,useEffect} from "react"
import SearchForm from "../components/SearchForm"
import { getProperties } from "../services/service"
import Spinner from "../components/Spinner"

const Listings = ()=>{
 const [location,setLocation] = useState("Lagos")
 const [properties,setProperties] = useState([])
 const [loading,setLoading] = useState(false)



useEffect(()=>{
    setLoading(true)
    getProperties().then((data)=>{
        setProperties(data.data)
        setLoading(false)
        console.log(data)
    })
},[])


    return (
        <div className="main-container-listing ">
<div className = "listing-header">
    <h1>WorkPlaces in {location}</h1>
    <SearchForm/>
</div>
<div>

    {/*map through list item*/}

    {
        loading ? <Spinner/> :  
            properties.map((item)=>{
                return(
                    <ItemCard id={item._id} item={item}/>
                )
            })
        
    }


  </div>
            
        </div>
    )
    
}


export default Listings