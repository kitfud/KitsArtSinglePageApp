import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
  return (
    <React.Fragment>
    

    <text className ="center">
    This is my website to showcase my wonderful art!
    </text><br/>
    <img className ="center" width="250" height="auto" src= "/images/1.jpg"/><br/>
    <Link className="center" to='/art'>Click to See Art</Link>
    </React.Fragment>
    
  )
}


export default Home