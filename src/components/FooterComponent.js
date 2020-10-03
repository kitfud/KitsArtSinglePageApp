import React from 'react'

function Footer(){
  return (
 <React.Fragment>
  <footer>
  <div class="footerstyleleft">
    <p>
     Created 2020 - Kit'sArt 
      </p>
  </div>
  
  <div class = "footerstyleright">
  <p>
 <a href="mailto:kitfuderich@gmail.com" class="contact">Contact/Price Inquieries</a>
  </p>
     
  </div>
</footer>
 </React.Fragment>

   
  )
}

const right = {
  float:"right",
  marginRight:"150px"
}

export default Footer;