import React from 'react'
import "./Header.scss"

const Header = ({length, newLength}) => {
    return (
        <div className='head'>
            <div>
                <a href='/'>{`All Orders ${length}`}</a>
            </div>
            <div>{`Showing ${newLength} of ${length} Results`}</div>
        </div>
    )
}

export default Header