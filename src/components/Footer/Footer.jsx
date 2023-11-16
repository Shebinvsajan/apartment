import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';import './Footer.css'
export default function Footer() {
  return (
    <div>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Company</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li><RouterLink to={'/privacy'}>Terms & Conditions</RouterLink></li>
                  <li><RouterLink to={'/privacy'}>Privacy Policy</RouterLink></li>
                  <li><RouterLink to={'/privacy'}>Support</RouterLink></li>
                  <li><aRouterLink to={'/privacy'}>FAQ</aRouterLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget">

                <ul className="list-unstyled footer-menu lh-35">
                <h5 className="text-capitalize mb-4">Quick Links</h5>

                <li><ScrollLink to="home" smooth={true} duration={500} offset={-70}>Home</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500} offset={-70}>About</ScrollLink></li>
              <li><ScrollLink to="project" smooth={true} duration={500} offset={-70}>Our Project</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} offset={-70}>Contact</ScrollLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Subscribe Us</h4>
                <p>Subscribe to get the latest news article and resources </p>

              </div>
            </div>

            <div className="col-lg-3 ml-auto col-sm-6">
              <div className="widget">
                <div className="logo mb-4">
                  <h3>Sqare<span>Frame</span></h3>
                </div>
                <h6><a href="tel:+91 90591 78744">+91 90591 78744</a></h6>
                <a href="mailto:Infosquareframe@gmail.com"><span className="text-color h4">Infosquareframe@gmail.com</span></a>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="copyright">
                  &copy; Copyright Reserved to <span className="text-color">square</span> by <a href="" target="_blank" rel="noopener noreferrer">center</a>
                </div>
              </div>

           
        
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}