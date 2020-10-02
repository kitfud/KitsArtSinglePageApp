import React from 'react'
import {Link} from 'react-router-dom'
import {ART} from './shared/art'

function RenderPaintings(){
  const mypaintings = ART.map((info)=>
  <tr>
    <td>{info.name}</td>
    <td><img width= "200px" heigh="200px"src={info.image}></img></td>
  </tr>
)

return <React.Fragment> 
<table style = {tableStyle}>
 <tr>
    <th>Title</th>
    <th>Painting</th>
</tr>
{mypaintings}
</table>   
</React.Fragment>
}



function Art(){

  return (
 
     <React.Fragment>
        <br/>
    <RenderPaintings/>
    <Link to='/home'> Link to Home </Link>
    </React.Fragment>
  )
}

const tableStyle = {
  width:"100%"
}

export default Art