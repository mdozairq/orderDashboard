import React from 'react'
import './Table.scss';

const Table = ({Data}) => {
    console.log(Data);
    return (
        <div className='xTable'>
            <table>
                <thead>
                    <tr className='tHead'>
                        <th style={{borderRadius: "10px 0px 0px 10px"}}>ORDER ID</th>
                        <th>CUSTOMER</th>
                        <th>ADDRESS</th>
                        <th>PRODUCT</th>
                        <th>ORDER DATE</th>
                        <th style={{borderRadius: "0px 10px 10px 0px"}}>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                {Data.length ? Data.map((eachData, id)=>
                    <tr key={id}>
                        <td>{eachData.order_id}</td>
                        <td>{eachData.customer}</td>
                        <td>{eachData.country}</td>
                        <td>{eachData.product_title}</td>
                        <td>{eachData.date}</td>
                        <td><button style={{border:"none",margin:"5px",borderRadius:"15px", width:"90px", height:"32px", background:eachData.status==='Delivered'?"#ADDAEA":eachData.status=== "Completed"?"#E5FFED":"#FFFAE5",
                        color:eachData.status==='Delivered'?"#0099CC":eachData.status=== "Completed"?"#78AB46":"#FFCC11"}}>{eachData.status}</button></td>
                    </tr>
                ): <h2>No Data found</h2>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table