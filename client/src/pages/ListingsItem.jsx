import { useParams } from "react-router-dom"
import "../styles/Listings.css"
import mockImage3 from  "../assets/images/mock-image-3.jpg"
import Modal from 'react-modal';
import React from "react";
import { getPropertiesById } from "../services/service"
import PaymentForm from "../components/PaymentForm";
import { useState ,useEffect} from "react"

import Spinner from "../components/Spinner"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      height:"500px",
      width:"500px",
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  
  Modal.setAppElement('#root');
  

const ListingsItem = ()=>{
  const [property,setProperty] = useState([])
  const [loading,setLoading] = useState(false)
 
  useEffect(()=>{
    setLoading(true)
    getPropertiesById(params.listId).then((data)=>{
        setProperty(data)
        setLoading(false)
        console.log(property)
    }).catch((e)=>{
      alert("än error occured")
     setLoading(false)
  })
},[])



    const params = useParams()
    console.log(params)
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (

      
        <div>
          
    {
        loading ? <Spinner/> :  <div>

<Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

<PaymentForm/>
      </Modal>
            <div>
   <h1>Lagos island office</h1>
            </div>
<div className="image-row">
   
    <div className="inner">
<img className="image-s" src={mockImage3}></img>
<img className="image-s" src={mockImage3}></img>
<img  className="image-s" src={mockImage3}></img>
    </div>
</div>


<div className="container description">
    <h1>About office</h1>
<p>In the heart of Lagos' financial and business core, our Africa Reinsurance Building business centre is an dynamic place to work
The centre is close to the headquarters of companies from finance, commerce, energy and more – with fast links to the E1 putting you just thirty minutes from the airport.

This spacious centre spans three floors of a striking glass-fronted high rise that’s sure to impress your visitors. And while you're close to thriving businesses and networking opportunities, you'll also be moments from a choice of world-class restaurants, bars and retailers.

Excellent transport links for a convenient commute 24-hour access so you can work your own way A professional location at the centre of Victoria Island Stunning views over the Lagos skyline Business lounge access for working on the move Professional meeting rooms so you can bring people together</p>

<div className="cost-calc">
    <h3>What will it cost ?</h3>
    <h5>Office space from #92000</h5>
    <button className="btn btn-pr" onClick={openModal}>Book now</button>
</div>
</div>


        </div>
    
    
    
    }
       



        </div>
    )
    
}


export default ListingsItem