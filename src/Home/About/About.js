import React from 'react'
import about from "../about.svg"
import "./About.css"
import SimpleImageSlider from "react-simple-image-slider";
import image1 from '../Images/tenis1.jfif'
import image2 from '../Images/tenis2.jfif'
import image3 from '../Images/tenis3.jfif'
import image4 from '../Images/tenis4.jfif'
import image5 from '../Images/tenis5.jfif'
import image6 from '../Images/tenis6.jfif'
import image7 from '../Images/tenis7.jfif'
import image8 from '../Images/tenis8.jfif'
import image9 from '../Images/tenis9.jfif'
import image10 from '../Images/tenis10.jfif'
import image11 from '../Images/tenis11.jfif'
import image12 from '../Images/tenis12.jfif'
import image13 from '../Images/tenis13.jfif'
import image14 from '../Images/tenis14.jpg'
import image15 from '../Images/tenis15.jpg'
import image16 from '../Images/tenis16.jpg'

const About = () => {

    const images = [
        { url: image15 },
        { url: image16 },
        { url: image14 },
        { url: image5 },
        { url: image6 },
        { url: image7 },
        { url: image8 },
        { url: image9 },
        { url: image10 },
        { url: image11 },
        { url: image12 },
        { url: image13 },
      ];

    return (
        <div className='Main-about-data'>
            <div className='about-us-story'>
                <div  className='about-us-heading'>
                    <h1>About Us</h1>
                </div>
                <div className="para">
                    <p className='pa'>The 24<sup>th</sup> annual Ajay Kumar Garg Memorial Table Tennis
                        Tournament is to be conducted on <b>19-20 November 2022</b> at Ajay Kumar Garg Engineering
                        College in association with GATT- Affiliated with UPTTA. This tournament is state level which
                        is held every year for all professional institutions and schools of the state. Various teams mark
                        their participation in 10 different categories for men and women separately in individual and team
                        events. A huge amount is kept as the prize money.
                        Last Year the tournament had top eight State ranked Table Tennis players and 21 teams with a
                        total of 180 participants from the Cities of <b>Allahabad, Lucknow, Moradabad, Meerut, Agra, Noida
                            and Ghaziabad,</b> besides enthusiastic response from the neighbouring schools and colleges.</p>
                    <div className='about-us-image'>
                        <SimpleImageSlider
                            width={332}
                            height={250}
                            images={images}
                            slideDuration={0.7}
                            autoPlayDelay={2.5}
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