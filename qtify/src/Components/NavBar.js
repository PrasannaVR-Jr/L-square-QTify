import React from 'react'
import Logo from './Logo'
import './NavBar.css'
import './Feedback'
import Feedback from './Feedback';
// import heroimage from "../assets/heroimage.png";
import correcthero from "../assets/heroimagecorrect.png"

function NavBar()
{
    return (<>
     <div className="NavBar"> 
        <Logo/>
        {/* <p className='alttext'>tify</p> */}
        <div  className='SearchInput' ><input placeholder='Search for a song'></input><button>Search</button></div>
        <Feedback/>
    </div>

    
    </>   
    )
}
export default NavBar;