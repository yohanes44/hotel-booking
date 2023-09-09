import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'



import "./hotel.scss"
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

export default function Hotel() {

    const [sliderNumber, setSliderNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (index)=>{
        setSliderNumber(index)
        setOpen(true)   
    }

    const handleMove = (direction)=>{
        let newSliderNumber;

        if(direction == "l"){
            newSliderNumber = sliderNumber == "0" ? 5: sliderNumber - 1;
        } 
        if(direction == "r"){
            newSliderNumber = sliderNumber == "5" ? 0: sliderNumber + 1;
        } 

        setSliderNumber(newSliderNumber);
    }

    const photos = [
        {
            src: "/hotel1.jpg"
        },
        {
            src: "/logo192.png"
        },
        {
            src: "/hotel1.jpg"
        },
        {
            src: "/hotel1.jpg"
        },
        {
            src: "/logo192.png"
        },
        {
            src: "/hotel1.jpg"
        }

    ]

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open &&
                    <div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} className='close' />
                        <FontAwesomeIcon onClick={()=>handleMove("l")} icon={faCircleArrowLeft} className='arrow' />
                        <div className="sliderWrapper">
                            <img src={photos[sliderNumber].src} className='sliderImg' />
                        </div>
                        <FontAwesomeIcon onClick={()=>handleMove("r")}icon={faCircleArrowRight} className='arrow' />
                    </div>
                }
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton st 123 Newyork</span>
                    </div>
                    <span className='hotelDistance'>
                        Excellent location - 500m from center
                    </span>
                    <span className='hotelPriceHighlight'>
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {
                            photos.map((photo, i) => (
                                <div className="hotelImgWrapper">
                                    <img onClick={()=> handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                                This Myrtle Beach hotel is 1 mile from the Myrtle Beach Entertainment Complex and 5 miles from the Myrtle Beach International Airport. The property features an outdoor pool.

                                All accommodations feature a flat-screen cable TV and coffee-making facilities as well as a microwave and a mini-bar.

                                La Quinta by Wyndham Myrtle Beach Broadway Area offers on-site fitness center and hot tub.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Krakow, this propert has an
                                excellent location score of 9.8
                            </span>
                            <h2>
                                <b>$945</b> 9 (nights)
                            </h2>
                            <button>Reserve ob Book </button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}
