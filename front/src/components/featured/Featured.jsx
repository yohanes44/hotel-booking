

import React from 'react'

import "./featured.scss"

export default function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="hotel1.jpg" className='featuredImg' alt="featuredItem" />
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>113 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="hotel2.jpg" className='featuredImg' alt="featuredItem" />
            <div className="featuredTitle">
                <h1>Austin</h1>
                <h2>513 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="hotel1.jpg" className='featuredImg' alt="featuredItem" />
            <div className="featuredTitle">
                <h1>Reno</h1>
                <h2>6   3 properties</h2>
            </div>
        </div>
    </div>
  )
}
