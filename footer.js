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
          <p>939 Beards Hill Rd Suite #C</p>
          <p>Aberdeen MD 21001</p>
        </div>
        <br />
        <div>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.519150422743!2d-76.183474784631!3d39.525341079478586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c3d5adaa7e47%3A0x127ee0081eb1a1e7!2s939+Beards+Hill+Rd+c%2C+Aberdeen%2C+MD+21001!5e0!3m2!1sen!2sus!4v1516031392983"
            max-width="450px"
            max-height="450px"
            display="initial"
            position="relative"
            allowFullScreen/>
        </div>
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
