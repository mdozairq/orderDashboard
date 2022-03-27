import React from 'react'
import "./Dialog.scss"

const Dialog = ({ open, setOpen, setStatus, setDateOrder, status, dateOrder }) => {


  return (
    <div id="myModal" className="modal" style={{ display: open ? "block" : "none" }}>
      <div className="modal-content">
        <span className="close" onClick={() => setOpen(false)}>&times;</span>
        <h3>FILTERS</h3>
        <hr/>
        <div>
          <label>Select Status:</label>
          <select value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option value='Delivered'>Delivered</option>
            <option value='Completed'>Completed</option>
            <option value='Prepared'>Prepared</option>
            <option value='' selected>All Status</option>
          </select>
        </div>
        <div>
        <label>Sort by Dates:</label>
          <select value={dateOrder} onChange={(e)=>setDateOrder(e.target.value)}>
            <option value='0'>Earliest to Recent</option>
            <option value='1'>Recent to Earliest</option>
            <option value='' selected>All Date</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Dialog