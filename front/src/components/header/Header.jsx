import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'




import { DateRange } from "react-date-range"
import { format } from "date-fns"

import "./header.scss"
import { useState } from 'react'


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Header() {

    const [date, setDate] = useState(
        [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection"
            }
        ])

    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(
        {
            adults: 1,
            children: 0,
            room: 4
        }
    )

    const [openOption, setOpenOption] = useState(false);

    const optionCounter = (name, operation)=>{

                setOptions((prev) => {
                    return {
                        ...prev, [name]: (operation == "i") ? options[name] ++ : options[name] --  
                    }
                })
                
    }


    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1>
                <p className="headerDesc">
                    Get rewarded for your travels - unlock instant savings of 10% or
                </p>
                <button className="headerButton">Sign in/ Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=> setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(date[0].endDate, "MM/dd/yyyy")}  `}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            ranges={date}
                            onChange={(ranges) => {
                                setDate([ranges.selection])
                            }}
                            moveRangeOnFirstSelection={false}

                            className='date'
                        />}

                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=> setOpenOption(!openOption) } className='headerSearchText'>{`${options.adults} adult - ${options.children} childred - ${options.room} room`}</span>
                        
                        {
                            openOption && 
                        <div className='options'>
                            
                                <div className='optionItem'>
                                    <span>Adult</span>
                                    <div className="optionCounter">
                                        <button className='counterButton' onClick={()=> 
                                            optionCounter('adults', "i")
                                        } >+</button>
                                        <span>{options.adults}</span>
                                        <button className="counterButton" onClick={()=> 
                                            optionCounter('adults', "d")
                                        } disabled={options.adults <= 1} >-</button>
                                    </div>
                                </div>  
                                <div className="optionItem">
                                    <span>Children</span>
                                    <div className="optionCounter">
                                        <button className='counterButton' onClick={()=> 
                                            optionCounter('children', "i")
                                        } >+</button>
                                        <span>{options.children}</span>
                                        <button className='counterButton' onClick={()=> 
                                            optionCounter('children', "d")
                                        } disabled={options.children < 1} >-</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span>Room</span>
                                    <div className="optionCounter">
                                        <button className='counterButton' onClick={()=> 
                                            optionCounter('room', "i")
                                        } >+</button>
                                        <span>{options.room}</span>
                                        <button className='counterButton' onClick={()=> 
                                            optionCounter('room', "d")
                                        } disabled={options.room < 1} >-</button>
                                    </div>
                                </div>  
                        </div>
                        }
                    
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerButton">Search</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
