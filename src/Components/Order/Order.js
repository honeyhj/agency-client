import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    return (
        <div id="order">
            <form action="http://localhost:4000/allOrder" method="POST">
                <input type="text" name="name" value={loggedInUser.name} placeholder="Your name/ company's name"/>
                <input type="email" name="email"  value={loggedInUser.email} placeholder="Your email address"/>
                <input type="text" name="category"  placeholder="Graphic Design"/>
                <input type="text" name="details"  placeholder="Project Details"/>
                <div className="file-part">
                    <input type="number" name="price"  placeholder="Price"/>
                    <input type="text" name="status" value="pending" disabled/>
                    <input type="file" name="file" className="file"/>
                </div>
                <input type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default Order;