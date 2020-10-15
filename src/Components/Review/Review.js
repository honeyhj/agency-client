import React from 'react';

const Review = () => {
    return (
        <div id="review">
            <form action='http://localhost:4000/allReview' method="POST">
                <input type="text" name="name" placeholder="Your name"/>
                <input type="text" name="company" placeholder="Company's name Design"/>
                <input type="text" name="description" placeholder="Description"/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Review;