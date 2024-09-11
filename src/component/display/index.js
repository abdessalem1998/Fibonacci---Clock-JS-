import React from 'react';

const TableLayout = ({ display }) => {

    return (
        <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
                <tr>
                    <td
                        rowSpan="2"
                        colSpan="2"
                        style={{
                            border: '1px solid black',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            height: '100px',
                            width: '100px',
                            backgroundColor: display[2]
                        }}
                    >
                        2
                    </td>
                    <td
                        rowSpan="1"
                        colSpan="1"
                        style={{
                            border: '1px solid black',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            height: '50px',
                            width: '50px',
                            backgroundColor: display[0]
                        }}
                    >
                        1
                    </td>
                    <td
                        rowSpan="5"
                        colSpan="5"
                        style={{
                            border: '1px solid black',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            height: '250px',
                            width: '250px',
                            backgroundColor: display[4]
                        }}
                    >
                        5
                    </td>
                </tr>
                <tr>
                    <td
                        rowSpan="1"
                        colSpan="1"
                        style={{
                            border: '1px solid black',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            height: '50px',
                            width: '50px',
                            backgroundColor: display[1]
                        }}
                    >
                        1
                    </td>
                </tr>
                <tr>
                    <td
                        rowSpan="3"
                        colSpan="3"
                        style={{
                            border: '1px solid black',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            height: '150px',
                            width: '150px',
                            backgroundColor: display[3]
                        }}
                    >
                        3
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableLayout;