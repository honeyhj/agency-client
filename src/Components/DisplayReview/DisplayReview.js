import React, { useEffect, useState } from 'react';

const DisplayReview = () => {
    const [displayReview,setDisplayReview]=useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/allReview')
        .then(res =>res.json())
        .then(data =>setDisplayReview(data))
    },[])
    return (
        <div id="displayReview">
            <h2>clients <span style={{color:'#7AB259'}}>Feedbacks</span></h2>
            <div className="displayReview">
                {
                    displayReview.map(review =><div className="item">
                    <div className="item-a">
                        <img src="" alt=""/>
                        <span>{review.name}</span>
                    </div>
                    <div className="item-b">
                        <h4>{review.company}</h4>
                        <p>{review.description}</p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default DisplayReview;