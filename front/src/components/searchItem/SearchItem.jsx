



import React from 'react'

import "./searchItem.scss"

export default function SearchItem() {
  return (
    <div className="searchItem">
        <img src="hotel1.jpg" alt="searchItemImg" className='siImg' />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio - 1 bathroom - 21m squere 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            Details
        </div>
    </div>
  )
}
