import React from 'react';
import './custom.scss';
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiOutlineDribbble  } from 'react-icons/ai';
import { BsInstagram, BsPinterest } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div id="footer" className="site-footer js-site-footer" role="contentinfo">
        <div className="container-large">
            <div className="footer-main-content">
              <div>
                <a href="/">
                  <span className="accessibility-text">Back to home page</span>
                </a>
                <div className="tagline">
                  Dribbble is the world’s leading community for creatives to share, grow, and get hired.
                </div>
                <div className="social-links-container">
                  <a href="/dribbble">
                 
                    <span className="accessibility-text">Back to home page</span>
                  </a>
                  <a href="http://twitter.com/dribbble">
                    <AiOutlineTwitter className='icon'/>
                    <span className="accessibility-text">Twitter</span>
                  </a>
                  <a href="http://facebook.com/dribbble">
                    <AiFillFacebook className='icon'/>
                  <span className="accessibility-text">Facebook</span>
                  </a>
                  <a href="http://instagram.com/dribbble">
                  <BsInstagram className='icon'/>

                  <span className="accessibility-text">Instagram</span>
                  </a>
                  <a href="http://www.pinterest.com/dribbble/">
                    <BsPinterest className='icon'/>
                  <span className="accessibility-text">Pinterest</span>
                  </a>
                </div>
              </div>
              <div className="links-container d-flex">
                  <div className="links-column">
                      <div className="link-heading">For designers</div>
                          <a className="link" href="/pro">Go Pro!</a>
                          <a className="link" href="/shots">Explore design work</a>
                          <a className="link" href="/stories">Design blog</a>
                          <a className="link" href="/overtime">Overtime podcast</a>
                          <a className="link" href="/shots?list=playoffs">Playoffs</a>
                          <a className="link" href="/guidelines">Code of conduct</a>
                  </div>
                  <div className="links-column">
                      <div className="link-heading">Hire designers</div>
                          <a className="link" href="/jobs/new">Post a job opening</a>
                          <a className="link" href="/freelance-jobs">Post a freelance project</a>
                          <a className="link" href="/designers">Search for designers</a>
                      <div className="link-heading">Brands</div>
                          <a className="link" href="/advertise">Advertise with us</a>
                  </div>
                  <div className="links-column">
                      <div className="link-heading">Company</div>
                          <a className="link" href="/about">About</a>
                          <a className="link" href="/careers">Careers</a>
                          <a className="link" href="/contact">Support</a>
                          <a className="link" href="/media-kit">Media kit</a>
                          <a className="link" href="/testimonials">Testimonials</a>
                          <a className="link" href="https://developer.dribbble.com">API</a>
                          <a className="link" href="/terms">Terms of service</a>
                          <a className="link" href="/privacy">Privacy policy</a>
                          <a className="link" href="/cookie-policy">Cookie policy</a>
                  </div>
                  <div className="links-column">
                      <div className="link-heading">Directories</div>
                          <a className="link" href="/directories/jobs">Design jobs</a>
                          <a className="link" href="/directories/designers">Designers for hire</a>
                          <a className="link" href="/directories/freelance-designers">Freelance designers for hire</a>
                          <a className="link" href="/tags">Tags</a>
                          <a className="link" href="/places">Places</a>
                      <div className="link-heading">Design assets</div>
                          <a className="link" href="/marketplace">Dribbble Marketplace</a>
                          <a target="_blank" rel="noopener" className="link" href="https://creativemarket.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Creative Market</a>
                          <a target="_blank" rel="noopener" className="link" href="https://www.fontspring.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Fontspring</a>
                          <a target="_blank" rel="noopener" className="link" href="https://www.fontsquirrel.com/?utm_source=dribbble&amp;utm_medium=referral&amp;utm_campaign=footer">Font Squirrel</a>
                  </div>
                  <div className="links-column">
                      <div className="link-heading">Design Resources</div>
                        <a rel="noopener" className="link" href="/resources/freelance">Freelancing</a>
                        <a rel="noopener" className="link" href="/resources/design-hiring">Design Hiring</a>
                        <a rel="noopener" className="link" href="/resources/design-portfolio">Design Portfolio</a>
                        <a rel="noopener" className="link" href="/resources/education">Design Education</a>
                        <a rel="noopener" className="link" href="/resources/creative-process">Creative Process</a>
                        <a rel="noopener" className="link" href="https://www.industry-trends.dribbble.com">Design Industry Trends</a>
                  </div>
              </div>
            </div>
          <div className="footer-lower-content">
            <div>© 2023 Dribbble. All rights reserved.</div>
            <div className="total-shots-container">
              <div>
                <span className="shots-count">21,571,365</span>
                shots dribbbled
              </div>
              <img className="dribbble-ball ls-is-cached lazyloaded" data-src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg" width="24px" height="24px" alt="Dribbble ball icon" src="https://cdn.dribbble.com/assets/dribbble-ball-icon-4e54c54abecf8efe027abe6f8bc7794553b8abef3bdb49cd15797067cf80ca53.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;