import React from 'react';
import Iframe from 'react-iframe';

//COMPONENT


const Footer = () => {
  return (
    <div id="contact" className="footer">

      <br />
      <div className="hours">
        <div className="hours-left">
          <p id="location"><strong><em>Locations</em></strong></p>
          <br />
          <p>939 Beards Rill Rd Suite #C</p>
          <p>Aberdeen MD 21903</p>
        </div>
        <br />
        <div className="hours-right">
          <p id="hours"><strong><em>Hours:</em></strong></p>
          <br />
          <p>Mon - Thurs: 10:30AM - 9:00PM</p>
          <p>Fri - Sat: 10:30AM - 9:30PM</p>
          <p>Sun: 11:30AM - 9:30PM</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
