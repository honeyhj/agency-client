import React from 'react';
import { useEffect } from 'react';

const Admins = () => {
    return (
        <div id="admins">
            <h2>Admin</h2>
            <form action="http://localhost:4000/addAdmin" method="POST">
                <input type="email" name="email" placeholder="Email"/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default Admins;