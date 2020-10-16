import React from 'react';
import logo from '../../images/logos/logo.png';
import pic from '../../images/logos/Frame.png';
import airbnb from '../../images/logos/airbnb.png';
import google from '../../images/logos/google.png';
import netflix from '../../images/logos/netflix.png';
import slack from '../../images/logos/slack.png';
import uber from '../../images/logos/uber.png';
import '../../App.css'
import {Link} from 'react-router-dom';
const Landing = () => {
    const openNav = () => {
        document
            .getElementById('mobile')
            .style
            .display = 'block'
    }
    const closeNav = () => {
        document
            .getElementById('mobile')
            .style
            .display = 'none'
    }

    return (
        <section id="landing">
            <div className="tie">
                <div className="nav">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="" className="link">home</Link>
                            </li>
                            <li>
                                <Link to="" className="link">our portfolio</Link>
                            </li>
                            <li>
                                <Link to="" className="link">our team</Link>
                            </li>
                            <li>
                                <Link to="" className="link">contact us</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="link">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile-menu">
                        <span onClick={openNav} className="open">Menu</span>
                        <div id="mobile">
                            <span onClick={closeNav} className="close">Close</span>
                            <ul>
                                <li>
                                    <Link to="" className="link">home</Link>
                                </li>
                                <li>
                                    <Link to="" className="link">our portfolio</Link>
                                </li>
                                <li>
                                    <Link to="" className="link">our team</Link>
                                </li>
                                <li>
                                    <Link to="" className="link">contact us</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="link">Dashboard</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <main id="main">
                    <div className="heading">
                        <div>
                            <h1>Let's Grow your<br/>brand to the<br/>next level</h1>
                            <p>Lorem ipsum dolor sit amet<br/>
                                consectetur adipisicing elit.<br/>
                                Natus laboriosam voluptas repellat vero at non.</p>
                            <div className="btn">
                                <span>
                                    <Link to="" className="link">hire us</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="picture">
                        <img src={pic} alt="pic"/>
                    </div>
                </main>
                <div id="brand">
                    <img src={airbnb} alt="airbnb"/>
                    <img src={google} alt="google"/>
                    <img src={netflix} alt="netflix"/>
                    <img src={slack} alt="slack"/>
                    <img src={uber} alt="uber"/>
                </div>
            </div>
        </section>
    );
};

export default Landing;