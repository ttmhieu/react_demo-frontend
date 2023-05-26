/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './styling.scss';


const menuList = [
  'Find talent',
  'For designers',
  'Inspriation',
  'Learn design',
  'Go Pro'
];

const NavBar = () => {


  return (
    <div className='home-nav-bar__wrapper align-items-center'>
      <div className=''>
        <ul className='d-flex flex-row gap-5 m-0'>
          {
            menuList.map((item) => (
              <li className='d-flex'>{item}</li>
            ))
          }
        </ul>
      </div>
      <div className=''>
        <p className='m-0'>Dribble</p>
      </div>
      <div className='user-action d-flex'>
        <a className='nav-bar-item__login ms-2 d-flex mt-1' href="#">login</a>
        <a className='nav-bar-item__signup ms-2 btn btn-primary' href="#">sign up</a>
        <a className='nav-bar-item__logout ms-2 btn btn-secondary' href="#">Hire Creatives</a>
      </div>
    </div>

  );
};

export default NavBar;