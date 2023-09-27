import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { AuthContext } from '../context/AuthContext.jsx';


const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/movies',
    display: 'Find a Movie',
  },
  // Add more navigation links as needed
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

 const toggleMenu = () => {
    menuRef.current.classList.toggle('show__menu');
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div>{/*<img src={logo} alt="" />*/}</div>
          </Link>

          {/* Menu */}
          <div onClick={toggleMenu}  className="navigation" ref={menuRef}>
            <ul
              className="menu flex items-center gap-[2.7rem]"
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav Right */}
          <div className="flex items-center gap-4">
            {user ? (
              // User is logged in
              <div className="flex items-center gap-4">
                <span className="text-textColor text-[16px] leading-7">
                  Welcome, {user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              // User is not logged in
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer text-white" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
