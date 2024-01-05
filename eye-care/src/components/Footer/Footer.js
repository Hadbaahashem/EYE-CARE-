import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className= "footer">
      <div className="top">
        <div>
        <h1>EYE CARE</h1>
        <p>Caring for your vision.</p>
        </div>
        <ul class="team-icon">
                     <li><a href="https://twitter.com/" class="twitter"><i class="fa fa-twitter"></i></a></li>
                     <li><a href="https://www.pinterest.com/" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                     <li><a href="https://www.facebook.com/hadbaa.hashem.5/" class="facebook"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#" class="dribble"> <i class="fa fa-dribbble"></i>
                      </a></li>
                        
                    </ul>
      </div>
    <div className="bottom">
    <div>
      <h4>Project</h4>
      <a href="/">Changelog</a> 
      <a href="/">Status</a> 
      <a href="/">License</a> 
      <a href="/">All Versions</a> 

    </div>
    <div>
    <h4>Community</h4>
    <a href="/">GitHub</a> 
    <a href="/">Issues</a> 
    <a href="/">Project</a> 
    <a href="/">Twitter</a> 

  </div>
   <div>
  <h4>Help</h4>
  <a href="/">Support</a> 
  <a href="/">Troubleshooting</a> 
  <a href="/">Contact Us</a> 
  </div>
   <div>
  <h4>Others</h4>
  <a href="/">Team Of Service</a> 
  <a href="/">Privacy Policy</a> 
  <a href="/">License</a> 
  </div>
    </div>
    </div>
  )
}

export default Footer