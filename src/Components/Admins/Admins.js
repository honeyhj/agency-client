import React from 'react';

const Admins = () => {
    return (
        <div id="admins">
            <h2>Admin</h2>
            <form action="https://ancient-dawn-91525.herokuapp.com/addAdmin" method="POST">
                <input type="email" name="email" placeholder="Email"/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default Admins;