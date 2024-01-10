import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Prizes.css"
const Prizes = () => {
    return (<>

        <div className='Main-eligibility'>
            <div id='prize' className='eligibility-heading'>
                <h1>Prizes</h1>
            </div>

            <Table responsive>
                <thead>
                    <tr>
                        <th>
                            Position
                        </th>
                        <th>
                            Men Team
                        </th>
                        <th>
                            Women Team
                        </th>
                        <th>
                            Men
                        </th>
                        <th>
                            Women
                        </th>
                        <th>
                        Boys(U-19)
                        </th>
                        <th>
                        Girls(U-19)
                        </th>
                        <th>
                        Men Doubles
                        </th>
                        <th>
                        Mixed Doubles
                        </th>
                        <th>
                            Total(in Rs.)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b>Winner</b>
                        </td>
                        <td>
                            8000
                        </td>
                        <td>
                            8000
                        </td>
                        <td>
                            5000
                        </td>
                        <td>
                            5000
                        </td>
                        <td>
                            3500
                        </td>
                        <td>
                            3500
                        </td>
                        <td>
                            3500
                        </td>
                        <td>
                            3500
                        </td>
                        <td>
                            <b>40000</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Runner Up</b>
                        </td>
                        <td>
                            6000
                        </td>
                        <td>
                            6000
                        </td>
                        <td>
                            4000
                        </td>
                        <td>
                            4000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            <b>28000</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Semi Finalist 1</b>
                        </td>
                        <td>
                            3000
                        </td>
                        <td>
                            3000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            <b>16000</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Semi Finalist 2</b>
                        </td>
                        <td>
                            3000
                        </td>
                        <td>
                            3000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            2000
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            1500
                        </td>
                        <td>
                            <b>16000</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Total</b>
                        </td>
                        <td>
                            20000
                        </td>
                        <td>
                            20000
                        </td>
                        <td>
                            13000
                        </td>
                        <td>
                            13000
                        </td>
                        <td>
                            8500
                        </td>
                        <td>
                            8500
                        </td>
                        <td>
                            8500
                        </td>
                        <td>
                            8500
                        </td>
                        <td>
                            <b>100000</b>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div>
                <p className='pa'>Prizes may be reduced for less than 12 entries in any event.</p>
            
            </div>
        </div>


    </>)
}

export default Prizes