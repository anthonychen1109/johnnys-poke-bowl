import React from 'react';
import Iframe from 'react-iframe';

//COMPONENT


const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="location">
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3077.518967045805!2d-76.18347478523376!3d39.525345217290784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7c3d5adaa7e47%3A0x127ee0081eb1a1e7!2s939+Beards+Hill+Rd+c%2C+Aberdeen%2C+MD+21001!5e0!3m2!1sen!2sus!4v1515082373548"
          height="300px"
          max-width="800px"
          position="relative"
          allowFullScreen
          />
      </div>
      <br />
      <div className="hours">
        <p id="location"><strong><em>Locations</em></strong></p>
        <br />
        <p>939 Beards Hill Rd Suite #C</p>
        <p>Aberdeen MD 21001</p>
        <br />
        <p id="hours"><strong><em>Hours:</em></strong></p>
        <br />
        <p>Mon - Thurs: 10:30AM - 9:00PM</p>
        <p>Fri - Sat: 10:30AM - 9:30PM</p>
        <p>Sun: 11:30AM - 9:30PM</p>
      </div>
    </div>
  )
}

export default Footer;
