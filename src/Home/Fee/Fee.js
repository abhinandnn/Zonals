import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const Fee = () => {
    return (<>

        <div className='Main-eligibility'>
            <div id='fee' className='eligibility-heading'>
                <h1>Entry Fee</h1>
            </div>

            <Table responsive>
                <thead>
                    <tr>
                        <th>
                            S.No.
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Born After
                        </th>
                        <th>
                            Fee(in Rs.)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1.
                        </td>
                        <td>
                            Men Team
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            <b>700.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2.
                        </td>
                        <td>
                            Women Team
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            <b>700.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3.
                        </td>
                        <td>
                            Men
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            <b>400.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4.
                        </td>
                        <td>
                            Women
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            <b>400.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            5.
                        </td>
                        <td>
                            Boys
                        </td>
                        <td>
                            Under 19 yrs.
                        </td>
                        <td>
                            Born on after 1.1.2006
                        </td>
                        <td>
                            <b>400.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            6.
                        </td>
                        <td>
                            Girls
                        </td>
                        <td>
                            Under 19 yrs.
                        </td>
                        <td>
                            Born on after 1.1.2006
                        </td>
                        <td>
                            <b>400.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            7.
                        </td>
                        <td>
                            Men Doubles
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            <b>500.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            8.
                        </td>
                        <td>
                            Mixed Doubles
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            <b>500.00</b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            9.
                        </td>
                        <td>
                            Veteran Men & Women
                        </td>
                        <td>
                            Above 40 Years
                        </td>
                        <td>
                            --
                        </td>
                        <td>
                            <b>400.00</b>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </div>


    </>)
}

export default Fee