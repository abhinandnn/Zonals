import React from 'react'
import about from "../about.svg"
import "./EventRecap.css"
import Table from 'react-bootstrap/Table';




const EventRecap = () => {

    return (
        <div className='Main-about-data' style={{paddingBottom:'1rem'}}>
            <div className='event-recap-story'>
                <div  className='event-recap-heading'>
                    <h1>Event Recap</h1>
                </div>
                <div className="par1">
                <p className="pa">AKGEC organised the <b>25th edition</b> of the prestigious annual sports event, the <b>Ajay Kumar Garg Memorial Table Tennis Tournament</b>, under the aegis of the <b>Ghaziabad Association of Table Tennis (GATT)</b>, affiliated with the <b>Uttar Pradesh Table Tennis Association</b> in the college during <b>03-04 February 2024</b>. The <b>National Level Tournament</b> is held every year for all professional institutes, colleges, and schools of the country.</p>
    <p className="par">The tournament was participated by <b>24 teams</b> and <b>222 participants</b> in the singles category from various parts of India like <b>Uttar Pradesh, Haryana, and Delhi</b>. Participation by <b>State and National level players</b> raised the level of the game to high standards during the tournament.</p>
    <p className="par">The tournament was a <b>huge success</b> as young players mesmerized everyone with their skillful game. The winners cherished their moments while others vowed to come back <b>stronger next year</b>.</p>
                </div>
                
            </div>
            <div style={{paddingTop:"1rem",paddingLeft:'1rem',paddingRight:'1rem'}}>
            <Table responsive >
    <thead>
    <tr>
            <th colspan="5">
                <em>Winners</em>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                Category
            </th>
            <th>
                Team Members
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td colspan="2">
                Men’s Team
            </td>
            <td>
                Sarth Mishra<br/>Sarthak seth<br/>Faisal Ali<br/>Kashish
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Women’s Team
            </td>
            <td>
                Gungun<br/>Srishti<br/>Prerna
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Men’s Single
            </td>
            <td>
                Divyansh Srivastava
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Women’s Single
            </td>
            <td>
                Shrishti Jaiswal
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Junior Boys ({'<'}19 years)
            </td>
            <td>
                Veer Balmiki
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Junior Girls ({'<'}19 years)
            </td>
            <td>
                Ayushi Singhal
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Men Doubles
            </td>
            <td>
                Sarth Mishra<br/>Divyansh Srivastava
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Mixed Doubles
            </td>
            <td>
                Sarth Mishra<br/>Aarti Chaudhary
            </td>
        </tr>
        <tr>
            <td colspan="2">
                Veteran Men ({'>'}40 Years)
            </td>
            <td>
                Sumit Nagpal
            </td>
        </tr>
    </tbody>
</Table>
</div>
<div className="par1">
<p className='par'>The closing ceremony was held on <b>04, February 2024</b>. <b>Mr. Deepak Malik</b>, a businessman and sports enthusiast, was the chief guest. The presence of Honourable members of the Board of Governors, <b>Mr. Sudhir Agarwal</b> and <b>Mr. Vinay Garg</b>, Director General <b>Dr. R.K. Agarwal</b>, added to the importance of the event. <b>Mr. Rajeev Sharma</b>, the organizing secretary, presented the Tournament brief. Heads of Departments, Deans, Section Incharges, Faculty, staff, and students of AKGEC along with members of Ghaziabad Table Tennis Association witnessed the prize distribution ceremony. Organizing Head <b>Prof I.P. Sharma</b> thanked all present for sparing their time.</p>
        </div>
        </div>
    )
}

export default EventRecap