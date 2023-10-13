import * as Route from '@/constants/routes';
import logo from '@/images/logo-remask.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <div>
            © K Company LLC
          </div>
          <span>
            At K Company LLC, we believe in the power of positive change,<br></br> one eco-friendly step at a time. We are dedicated to making a difference in<br></br> the world by championing sustainability, environmental stewardship, <br></br>and ecological preservation.

Our mission is simple yet profound: to <br></br>create a more sustainable and greener future for generations to come.<br></br> We're not just another business; we're a community of passionate individuals<br></br> who share a common vision for a healthier planet.
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <div>Contact Us</div>
          <span>
            +1 (800) 123-45-67
            <br></br>
            1 John Doe, Cupertino, CA 95014
            <br></br>
            9:00am — 6:00pm
            <br></br>
            Commitment to Eco-Friendly Solutions
            <br></br>
            Innovative Solutions
            <br></br>
            Community Involvement
            <br></br>
            Educational Resources
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
