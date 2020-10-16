import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const OrderList = () => {
    const [orderList,setOrderList]=useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(() =>{
        fetch('https://ancient-dawn-91525.herokuapp.com/allOrder?email='+loggedInUser.email,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization:`Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res =>res.json())
        .then(data =>setOrderList(data))
    })
    return (
        <div id="order-list">
            {
                orderList.map(order =><div className="item">
                        <div className="item-a">
                            <img src="" alt=""/>
                            <span>Pending</span>
                        </div>
                        <div className="item-b">
                            <h4>{order.name}</h4>
                            <p>{order.description}</p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default OrderList;