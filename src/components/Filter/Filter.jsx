import React from 'react'
import ifilter from '../../assets/Group 1537.svg'
import "./Filter.scss"

const Filter = ({setOpen, setSearch, search}) => {
  return (
    <div className='filter'>
      <div>
        <input placeholder='Search Customer Name...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <span className="close" onClick={() => setSearch("")}>&times;</span>
      </div>
      <div>
        <button onClick={()=>setOpen(true)}><img src={ifilter} alt="filter"/></button>
      </div>
    </div>
  )
}

export default Filter