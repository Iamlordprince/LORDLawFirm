import React from 'react';
import './about.css';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';

function Line() {
  return <div className="lineofcontrol"></div>;
}

function About() {
  return (
    <div className="aboutContainer">
      {/* Header */}
      <p className="unp">
        <i className="ri-circle-line"></i>
        <i className="ri-circle-line"></i> Unparalleled Company About
      </p>
      &nbsp;
      <h3 className="abtus">About us -----</h3>

      {/* First section */}
      <div className="parts">
        <div className="h1abt">
          <h1>Built on Integrity</h1>
          <h1>
            Driven by <span>Justice</span>
          </h1>
        </div>
        <div>
          <div className="circle">
            <div>
              <img className="circleImg" src={img2} alt="Law firm emblem" />
            </div>
            <div>
              <p>
                A law firm committed <br />
                to protecting your rights <br />
                and securing your future
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="part2">
        <div>
          <img className="img3" src={img3} alt="Foundation visual" />
        </div>
        <div className="foundation">
          <h3>OUR FOUNDATION</h3>
          <h1>
            Dedication & <span>commitment</span>
          </h1>
          <div>
            <p>
              Sed at dolor sit amet leo porttitor semper sit amet vitae quam.
              Sed varius, purus at
            </p>
            <p>
              consectetur faucibus, mi felis porttitor leo, et volutpat orci
              lacus sit amet ex.
            </p>
            <p>
              Donec non faucibus dolor, sed bibendum arcu. Sed malesuada eu
              nunc ut ultrices.
            </p>
            <p>Donec mollis mauris laoreet.</p>
          </div>

          {/* Icons grid */}
          <div className="icon">
            <div className="iconparts">
              <i className="ri-shield-check-line"></i>
              <br />
              <h3>Integrity first</h3>
              <p>We uphold the highest</p>
              <p>ethical standards</p>
            </div>
            <Line />
            <div className="iconparts">
              <i className="ri-user-line"></i>
              <br />
              <h3>Client Focused</h3>
              <p>Your goals are our priority</p>
              <p>ethical standards</p>
            </div>
            <Line />
            <div className="iconparts">
              <i className="ri-auction-line"></i>
              <br />
              <h3>Results Driven</h3>
              <p>Strategic solutions</p>
              <p>that deliver results</p>
            </div>
            <Line />
            <div className="iconparts">
              <i className="ri-lock-line"></i>
              <br />
              <h3>Confidential & Secure</h3>
              <p>Your privacy is our</p>
              <p>promise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;