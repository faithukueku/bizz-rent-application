import shopImage from "../assets/images/shop.jpeg"
import "../styles/Listings.css"
import { Link } from "react-router-dom";
import mockImage from  "../assets/images/mock-image.jpg"
import mockImage2 from  "../assets/images/mock-image-4.jpg"
import mockImage3 from  "../assets/images/mock-image-3.jpg"
import { useNavigate } from "react-router-dom";
const ItemCard = ({id})=>{
const navigate = useNavigate()

    return(
        <div className="item-card" onClick={()=>navigate(`/listings/${id}`)}>
           <div className="right-card">
            <div className="inner-image-1">
                <img src={mockImage} style={{width:"90%",height:"100%"}}></img>
            </div>
            <div className="inner-image-split">
                <div> <img src={mockImage2} style={{width:"100%",height:"100%"}}></img>
                </div>
                <div> <img src={mockImage3} style={{width:"100%",height:"100%"}}></img>
                </div>
            </div>
           </div>
           <div className="left-card">
            <div>
            <h1>Isaac john street ikeja</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut esse illum facilis enim sed expedita nesciunt suscipit magni rem error,
                 vel, quia neque eius. Qui necessitatibus facere obcaecati dolores?
            </p>
            </div>
            <div className="btn-container">
                <button className="btn btn-pr">Book now</button>
            </div>
           </div>
        </div>
    )
}

export default ItemCard