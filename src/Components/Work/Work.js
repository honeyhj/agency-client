import React, {Component} from 'react';
import '../../App.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../images/carousel-1.png';
import carousel2 from '../../images/carousel-1.png';
import carousel3 from '../../images/carousel-1.png';
import carousel4 from '../../images/carousel-1.png';
import carousel5 from '../../images/carousel-1.png';
class Work extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div id="work">
                <h2>here are some of our <span style={{color:'#7AB259'}}>works</span></h2>
            <Slider ref={c => (this.slider = c)} {...settings}>
                <div className="slideShow">
                    <img src={carousel1} alt="carousel1"/>
                </div>
                <div className="slideShow">
                <img src={carousel2} alt="carousel1"/>
                </div>
                <div className="slideShow">
                <img src={carousel3} alt="carousel1"/>
                </div>
                <div className="slideShow">
                <img src={carousel4} alt="carousel1"/>
                </div>
                <div className="slideShow">
                <img src={carousel5} alt="carousel1"/>
                </div>
        </Slider> 
        </div>
        );
    }
}

export default Work;