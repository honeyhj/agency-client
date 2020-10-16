import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                {/* <ul>
                    <li><Link to="/order" className="link">Order</Link></li>
                    <li><Link to="/serverList" className="link">ServiceList</Link></li>
                    <li><Link to="/review" className="link">Review</Link></li>
                    <li><Link to="/admins" className="link">Admins</Link></li>
                    <li><Link to="/orderList" className="link">OrderList</Link></li>
                </ul> */}
                {
                checkAdmin ? <div>
                    <li><Link to="/admins" className="link">Admins</Link></li>
                    <li><Link to="/serverList" className="link">ServiceList</Link></li>
                </div>
                :
                <div>
                    <li><Link to="/order" className="link">Order</Link></li>
                    <li><Link to="/review" className="link">Review</Link></li>
                    <li><Link to="/orderList" className="link">OrderList</Link></li>
                </div>
            }
            </div>
            {/* {
                checkAdmin ? <div>
                    <li><Link to="/admins" className="link">Admins</Link></li>
                    <li><Link to="/serverList" className="link">ServiceList</Link></li>
                </div>
                :
                <div>
                    <li><Link to="/order" className="link">Order</Link></li>
                    <li><Link to="/review" className="link">Review</Link></li>
                    <li><Link to="/orderList" className="link">OrderList</Link></li>
                </div>
            } */}
        </div>
    );
};

export default Dashboard;