import { useParams } from "react-router-dom"
import "../styles/Listings.css"
import mockImage3 from  "../assets/images/mock-image-3.jpg"
import Modal from 'react-modal';
import React from "react";
import PaymentForm from "../components/PaymentForm";

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
    const params = useParams()
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
    <div className="sales-banner"><h3>From #90000</h3></div>
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
</div>

<div className="cost-calc">
    <h3>What will it cost ?</h3>
    <h5>Office space from #92000</h5>
    <button className="btn btn-primary" onClick={openModal}>Make payments</button>
</div>


        </div>
    )
    
}


export default ListingsItem