import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Container, TopBar, SideBar } from './styles';

const MenuItems = [
  {
    name: 'Home',
    linkTo: '/',
  },
  {
    name: 'Menu Item 1',
    linkTo: '/mitem1',
  },
  {
    name: 'Menu Item 2',
    linkTo: '/mitem2',
  },

  {
    name: 'Menu Item 3',
    linkTo: '/mitem3',
  },
];

function NavBar() {
  const [openToogle, setOpenToogle] = useState(false);
  console.log(openToogle);
  function handleOpenToogle() {
    setOpenToogle(!openToogle);
    console.log(openToogle);
  }
  return (
    <>
      <Container>
        <button className='nav-button' onClick={handleOpenToogle}>
          <FiMenu size={30} color='#fff' />
        </button>
        <TopBar>
          <ul>
            {MenuItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.linkTo} activeStyle={{ color: 'yellow' }}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </TopBar>
      </Container>
      <SideBar openToogle={openToogle}>
        <button className='sb-close' onClick={handleOpenToogle}>
          <FiX size={30} color='#FFF' />
        </button>
        <ul>
          {MenuItems.map((item) => (
            <li key={item.name}>
              <NavLink to={item.linkTo} activeStyle={{ color: 'yellow' }}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </SideBar>
    </>
  );
}

export default NavBar;
