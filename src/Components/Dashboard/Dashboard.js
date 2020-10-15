import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Admins from '../Admins/Admins';
import Order from '../Order/Order';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
import ServerList from '../ServerList/ServerList';

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [checkAdmin,setCheckAdmin]=useState(false)
    useEffect(()=>{
        fetch('http://localhost:4000/admin',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setCheckAdmin(data))
    },[])
    return (
        <div id="dashboard">
            <div className="sidebar">
                <ul>
                    <li>Order</li>
                    <li>Service List</li>
                    <li>Preview</li>
                    <li>Add Service</li>
                    <li>Make Admin</li>
                </ul>
            </div>
            {
                checkAdmin ? <div>
                    <Admins></Admins> 
                    <ServerList></ServerList>
                </div>
                :
                <div>
                    <Order></Order>
                    <Review></Review>
                    <OrderList></OrderList>
                </div>
            }
        </div>
    );
};

export default Dashboard;