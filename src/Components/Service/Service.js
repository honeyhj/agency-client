import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import service1 from '../../images/icons/service1.png';
import service2 from '../../images/icons/service2.png';
import service3 from '../../images/icons/service3.png';
const Service = () => {
    const [allService,setAllService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allService')
        .then(res =>res.json())
        .then(data=>setAllService(data))
    })
    return (
        <section id="service">
            <div className="tie">
                <h2>provide awesome <span style={{color:'#7AB259'}}>service</span></h2>
                <div className="service-wrapper">
                    <Link to="/dashboard" className="link">
                        <div className="item">
                            <img src={service1} alt="service1"/>
                            <h3>Web and mobile app design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magni?</p>
                        </div>
                    </Link>
                    <Link to="/dashboard" className="link">
                        <div className="item">
                            <img src={service1} alt="service1"/>
                            <h3>Responsive design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magni?</p>
                        </div>
                    </Link>
                    <Link to="/dashboard" className="link">
                        <div className="item">
                            <img src={service1} alt="service1"/>
                            <h3>Graphic design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magni?</p>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </section>
    );
};

export default Service;