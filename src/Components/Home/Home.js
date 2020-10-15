import React from 'react';
import Contact from '../Contact/Contact';
import DisplayReview from '../DisplayReview/DisplayReview';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Service from '../Service/Service';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <Service></Service>
            <Work></Work>
            <DisplayReview></DisplayReview>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;