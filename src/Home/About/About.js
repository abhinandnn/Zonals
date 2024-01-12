import React from 'react'
import about from "../about.svg"
import "./About.css"
import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../Images/tenis1.jpg'
import image2 from '../Images/tenis2.jpg'
import image3 from '../Images/tenis3.jpg'
import image4 from '../Images/tenis4.jpg'
import image5 from '../Images/tenis5.jpg'
import image6 from '../Images/tenis6.jpg'
import image7 from '../Images/tenis7.jpg'
import image8 from '../Images/tenis8.jpg'
import image9 from '../Images/tenis9.jpg'
import image10 from '../Images/tenis10.jfif'
import image11 from '../Images/tenis11.jpg'



const About = () => {

    const images = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image4 },
        { url: image5 },
        { url: image6 },
        { url: image7 },
        { url: image8 },
        { url: image9 },
        { url: image10 },
        { url: image11 },
      ];

    return (
        <div className='Main-about-data'>
            <div className='about-us-story'>
                <div  className='about-us-heading'>
                    <h1>About Us</h1>
                </div>
                <div className="para">
                    <p className='pa'>The 25<sup>th</sup> annual Ajay Kumar Garg Memorial Table Tennis
                        Tournament is to be conducted on <b>3-4 February 2024</b> at Ajay Kumar Garg Engineering
                        College, Ghaziabad. This prestigious event is organized in collaboration with <b>GATT - affiliated with UPTTA</b>,
                         and holds recognition at the state level. Drawing participation from esteemed professional institutions and schools
                          across the state, the tournament encompasses a variety of team competitions and individual events for both men and women
                          . A substantial prize fund has been allocated to elevate the competitive spirit, emphasizing excellence and sportsmanship 
                          throughout the event. It serves as a platform to showcase the exceptional talents of State-ranked table tennis players,
                           attracting teams from prominent cities such as <b>Allahabad, Lucknow, Moradabad, Meerut, Agra, Noida
                            and Ghaziabad,</b> besides enthusiastic response from the neighbouring schools and colleges.</p>
                    <div className='about-us-image'>
                        <SimpleImageSlider
                            width={332}
                            height={250}
                            images={images}
                            slideDuration={0.7}
                            autoPlayDelay={3}
                            autoPlay
                            loop
                            showBullets
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About