/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './styling.scss';
import { DribbbleTextIcon } from '../common/CustomIcon';


const menuList = [
  'Find talent',
  'For designers',
  'Inspriation',
  'Learn design',
  'Go Pro'
];

const NavBar = () => {


  return (
    <div className='home-nav-bar__wrapper align-items-center justify-content-between'>
      <div className=''>
        <ul className='d-flex flex-row gap-3 m-0'>
          {
            menuList.map((item) => (
              <li className='d-flex'>{item}</li>
            ))
          }
        </ul>
      </div>
      <div className=''>
        <DribbbleTextIcon fill='none' />
      </div>
      <div className='user-action d-flex me-5'>
        <a className='nav-bar-item__login ms-2 mt-1' href="#">Log in</a>
        <a className='nav-bar-item__signup ms-2 btn btn-primary' href="#">Sign up</a>
        <a className='nav-bar-item__hire ms-2 btn btn-secondary' href="#">Hire Creatives</a>
      </div>
    </div>

  );
};

export default NavBar;