import React from 'react';

const menuList = [
  'Find talent',
  'For designers',
  'Inspriation',
  'Learn design',
  'Go Pro'
];

const NavBar = () => {


  return (
    <ul>
      {
        menuList.map((item) => (
          <li>{item}</li>
        ))
      }
    </ul>
  );
};

export default NavBar;