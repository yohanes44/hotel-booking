import React from 'react'


import "./featuredProperties.scss"

export default function FeaturedProperties() {
  return (
    <div className='fp'>
       <div className="fpItem">
        <img src="hotel1.jpg" alt="featuredProperty" className="fpImg" />     
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>8.5</button>
            <span>excellent</span>
        </div>
        </div> 

        <div className='fpItem'>
        <img src="pic2.png" alt="featuredProperty" className="fpImg" />     
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>8.5</button>
            <span>excellent</span>
        </div>
    </div>

    <div className='fpItem'>
        <img src="hotel1.jpg" alt="featuredProperty" className="fpImg" />     
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
            <button>8.5</button>
            <span>excellent</span>
        </div>
    </div>
    </div>
  )
}
