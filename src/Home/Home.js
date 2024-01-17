import React from 'react'
import Navbar from '../Navbar/Navbar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import star from "./star1.svg"
import category from "./categories.svg"
import Footer from "../Footer/Footer"
import About from './About/About';
import Eligibility from './Eligibility/Eligibility';
import Notes from './Notes/Notes';
import Prizes from './Prizes/Prizes';
import Fee from './Fee/Fee';
import Schedule from './Schedule/Schedule';
import Last from './Last/Last';
import Video from 'react-responsive-video'
import file from './Images/file.mp4'
import whatsapp from './Images/whatsapp.svg'
import { Link } from 'react-router-dom';

const Home = () => {

    
    return (<>
        <div className='Home'>
            <Navbar />
            <br></br>
            <div className='Bg-image' id="home">
                <div className="full-info">
                    <div className='details'>
                        <div className='Main-Heading'>
                            <h1>
                                25<sup>th</sup>  AJAY KUMAR GARG MEMORIAL
                            </h1>
                            <h1>
                                TABLE TENNIS TOURNAMENT
                            </h1>
                            <p>
                                Under the Aegis of GATT, Affiliated to UPTTA
                            </p>
                            <div className='dates'>
                                <div className='icon'>
                                    <CalendarMonthIcon fontSize='large'></CalendarMonthIcon>
                                </div>
                                <div className='text'>
                                    <h1>
                                        3-4 February 2024
                                    </h1>
                                </div>
                            </div>
                            {/* <div className='btn-pos py-2'>
                                <a href="https://www.google.com/" target={"_self"}><div className='register'>
                                    Register
                                </div></a>
                            </div> */}
                        </div>

                    </div>
                    <div className='prize'>
                        <div className='image'>
                            <img src={star}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='py-4 px-2' id='about'>
        <Video mp4={file} 
            height={[300, 400, 480, 560].map(n => n + 'px')}
            objectFit={`contain`}/>
        </div>

        <About />
        <Eligibility />
        <Prizes />
        <Schedule />
        <Fee />
        <Last />
        <Notes />

        <div className='organiser' id="organizers">
            <div className='heading'>
                <h1>Entry fee and forms will be sent to undersigned</h1>
            </div>
            <div className='organizing-committee'>

                <div className='committee-list'>


                    <div className='arrange'>
                        
                          <b>  Mr. Pratap Singh (Sports Officer)</b>
                        
                    </div>


                    <div className='arrange' >
                        <div>
                            <p style={{ margin: "0", padding: "0" }}><b>Add:</b> A.K.G. Engineering College,</p>
                            <p style={{ margin: "0", padding: "0" }}> 
                            NH-24, Delhi-Hapur ByPass Road, Ghaziabad </p>
                        </div>
                    </div>


                    <div className='arrange' >
                        <div>
                            <b>Ph.</b> 8744052891 to 94, 7290034976 7290034978
                        </div>

                    </div>
                    <div className='arrange' >
                        <div>
                            <b>Mob. </b>9213709657
                        </div>

                    </div>
                    <div className='arrange' >
                        <div>
                            <b>Email:</b> sports@akgec.ac.in
                        </div>

                    </div>

                </div>
            </div>
            
            <div className='student'>
            <div className='gap'>
                
                </div>  
                <div className='student-list'>

                <div className='arrange'>
                        <div className='student-name'>
                        <b>Sh. Rajeev Sharma (Organizing Secretary)</b>
                        </div>
                    </div>

                   
                    <div className='arrange' >
                    <div>
                            <p style={{ margin: "0", padding: "0" }}><b>Add:</b> A.K.G. Engineering College,</p>
                            <p style={{ margin: "0", padding: "0" }}> 
                            NH-24, Delhi-Hapur ByPass Road, Ghaziabad </p>
                        </div>
                    </div>


                    
                    <div className='arrange' >
                        <div>
                            <b>Mob. </b>9818085060
                        </div>

                    </div>
                    <div className='arrange' >
                        <div>
                            <b>Email:</b> rajeevsharma226@rediffmail.com
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div className='organiser' id="organizers">
            <div className='organizing-committee'>
                <div className='heading1'>
                    <h1>Organizing Committee</h1>
                </div>
                <div className='committee-list1'>
                    <ul>
                        <li>
                            <div className='arrange'>
                                <div className='student-name' style={{fontFamily: "Gilroy"}}>
                                    Prof. I.P Sharma
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px", display: "flex", alignItems: "center"}}>
                                    (9650370337)
                                    
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    SH. Rajeev Sharma
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px", display: "flex", alignItems: "center"}}>
                                    (9818085060
                                <Link target="_blank" to={'https://wa.me/919818085060?text=Need+to+fill%C2%A0registration+form'}><img className='chatButton' src={'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'}/></Link>)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                    MR. Pratap Singh
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px", display: "flex", alignItems: "center"}}>
                                    (9213709657
                                <Link target="_blank" to={'https://wa.me/919213709657?text=Need+to+fill%C2%A0registration+form'}><img className='chatButton' src={'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'}/></Link>)
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='student'>
                <div className='heading-student'>
                    <h1>Student Convenors</h1>
                </div>
                <div className='student-list'>
                    <ul>
                        <li>
                            <div className='arrange'>
                                <div className='student-name' style={{fontFamily: "Gilroy"}}>
                                Prateek Singh
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px", display: "flex", alignItems: "center"}}>
                                    (9318316168
                                <Link to={'https://wa.me/919318316168?text=Need+Enquiry+about+the+tournament'}><img className='chatButton' src={'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'}/></Link>)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                Awas Bhardwaj
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px", display: "flex", alignItems: "center"}}>
                                    (9821330802
                                <Link target="_blank" to={'https://wa.me/919821330802?text=Need+Enquiry+about+the+tournament'}><img className='chatButton' src={'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'}/></Link>)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                Jay Singh
                                </div>
                                <div style={{ paddingLeft: "5px", fontFamily: "Gilroy", fontWeight: "400", fontSize: "17px", lineHeight: "24px", paddingTop: "4px", display: "flex", alignItems: "center"}}>
                                    (8874938701
                                <Link target="_blank" to={'https://wa.me/918874938701?text=Need+Enquiry+about+the+tournament'}><img className='chatButton' src={'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'}/></Link>)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='arrange' style={{fontFamily: "Gilroy"}}>
                                <div>
                                 Vidhi Tripathi
                                </div>
                                <div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>

    </>
    )
}

export default Home