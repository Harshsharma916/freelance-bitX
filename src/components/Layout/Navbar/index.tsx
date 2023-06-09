import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import { ReactComponent as ElrondLogo } from './../../../assets/img/elrond.svg';
import logo from '../../../assets/img/logo.jpg';
import lightVector from '../../../assets/img/lightVector.png';
import './navbar.scss';

const Navbar = () => {
  const { address } = useGetAccountInfo();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <div className='navbar'>
      <div className='logoDiv'>
        <img src={logo} />
        <p>BitX Finance</p>
      </div>
      <div className='connectButton'>
        <img src={lightVector} />
        <p>Connect</p>
      </div>
    </div>
    // <BsNavbar className='bg-white border-bottom px-4 py-3'>
    //   <div className='container-fluid'>
    //     <Link
    //       className='d-flex align-items-center navbar-brand mr-0'
    //       to={isLoggedIn ? routeNames.dashboard : routeNames.home}
    //     >
    //       <ElrondLogo className='elrond-logo' />
    //       <span className='dapp-name text-muted'>{dAppName}</span>
    //     </Link>

    //     <Nav className='ml-auto'>
    //       {isLoggedIn && (
    //         <NavItem>
    //           <button className='btn btn-link' onClick={handleLogout}>
    //             Close
    //           </button>
    //         </NavItem>
    //       )}
    //     </Nav>
    //   </div>
    // </BsNavbar>
  );
};

export default Navbar;
