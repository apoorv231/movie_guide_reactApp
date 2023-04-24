import './Navbar.css'
import React, { useEffect, useState } from 'react'
import $ from "jquery"

import category from '../../../assets/category.png'
import menuIcon from '../../../assets/menuIcon.png'

function Navbar() {
    const [toggle,setToggle]=useState(true)
    useEffect(()=>{
        
    //     console.log("w: ", window.innerWidth);
    //    if(window.innerWidth>=1300)
    //    setToggle(false)
    //    else{
    //     setToggle(true)
    //    }

    } , [window.innerWidth])
  
    const toggleMenu = () => {
        const width=window.innerWidth;
        if(width<=1300)
        {
            console.log(" width : ",width);
            setToggle(!toggle)
        }
        else{
            if(!toggle)
            {

            }
        }

       
    }
    return (
        <div>
            <div className='navbar-container'>

                <div className='left_container'>
                    <div className='icon-container'>
                        {/*  flex 0.3  */}
                        <img src={menuIcon} onClick={toggleMenu} />

                    </div>
                </div>

                {/* <div className='right_container' style={{display:( window.innerWidth <=1300 && toggle 
                    ||window.innerWidth>=1300 )?"flex":"none"}}> */}
                <div className='right_container' style={{}} >
                    <div className='searchbar-container'>
                        {/*  flex 0.3  */}
                        <input type={'text'} placeholder="Search" />


                    </div>
                    <div className='menu-container'>
                        {/*  flex 0.6  */}

                        <div className='menu_items'>
                            <div className='menu_item' style={{ color: "#2de59c" }}>Home</div>
                            <div className='menu_item'>Language</div>
                            <div className='menu_item'>Genere</div>
                            <div className='menu_item'>Account</div>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
