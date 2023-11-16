import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';


function Home() {
  return (
    <div id='home'>
      <div className="banner-container">
     
          <div className=" container">
            <h1 className='home-head'>Welcome to Square Frame Your Certified <br /> Real Estate Partner in Bangalore</h1>
            <p className='home-dis'>Discover your dream property with Square Frame, your trusted RARA certified real estate agency in the heart of Bangalore. Our certification reflects our commitment to transparency, integrity, and excellence.</p>
            <button className='call-us-btn'>Call Us</button>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
  );
}

export default Home;
