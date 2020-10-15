import React, { useState } from 'react';
import { useEffect } from 'react';

const ServerList = () => {
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/orders')
        .then(res =>res.json())
        .then(data =>setOrders(data))
    },[])
    return (
        <div id="serverList">
            <h2>Orders</h2>
            <ul>
                <li className="list-a">
                    <span>name</span>
                    <span>email</span>
                    <span>service</span>
                    <span>project details</span>
                    <span>status</span>
                </li>
            {
                orders.map(order =><li>
                    <span>{order.name}</span>
                    <span>{order.email}</span>
                    <span>{order.category}</span>
                    <span>{order.details}</span>
                    <span>{order.status}</span>
                    <span>status</span>
                </li>)
            }
            </ul>
            
        </div>
    );
};

export default ServerList;