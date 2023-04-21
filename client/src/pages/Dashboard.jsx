import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from "../components/ItemCard"
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Welcome to the Dashboard</h1>

      <p>Here You can view your current office bookings</p>
      
      <div>
      <ItemCard id={"29201219dhdj"} type="booked"/>
      </div>
    </div>
  );
}

export default Dashboard;