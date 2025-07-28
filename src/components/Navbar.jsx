/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import Modal from './LoginModal';

function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    const handleClick = () => setShowModal(!showModal);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/menu', label: 'Menu' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
        { to: '/reservations', label: 'Reservations' },
    ];

    return (
        <nav id="navbar" className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="basis-3/12">
                <NavLink to="/" className="inline-block">
                    <img src={logo} alt="logo" className="w-[80px]" />
                </NavLink>
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-3 justify-center items-center basis-6/12 font-medium">
                {navLinks.map(({ to, label }) => {
                    return (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `relative px-4 py-2 text-[17px] tracking-wide cursor-pointer
                            after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full
                            after:h-[3px] after:bg-red after:rounded after:transition-transform after:origin-left
                            hover:after:scale-100
                            ${isActive ? 'text-red font-bold after:scale-100' : 'text-black after:scale-0'}`}>
                            {label}
                        </NavLink>
                    );
                })}
            </ul>

            {/* Right Buttons */}
            <div className="basis-3/12 text-end z-50">
                <a href="#" className="inline-block me-5 hover:opacity-60 transition-opacity">
                    <i
                        className={`fa-solid fa-bag-shopping fa-2xl ${location.pathname === '/' ? 'text-white' : 'text-black'
                            }`}
                    />
                </a>
                <button
                    onClick={handleClick}
                    className={`text-lg font-medium border-2 rounded py-1 px-2 mx-1 ${location.pathname === '/'
                        ? 'border-white text-red bg-white'
                        : 'border-black text-black bg-white'
                        }`}
                >
                    Sign Up
                </button>
                <button
                    onClick={handleClick}
                    className={`text-lg font-medium border-2 rounded py-1 px-2 mx-1 ${location.pathname === '/'
                        ? 'border-white text-white bg-transparent'
                        : 'border-black text-white bg-black'
                        }`}
                >
                    Sign In
                </button>
                <Modal modalStatus={showModal} onClose={() => setShowModal(false)} />
            </div>
        </nav>
    );
}

export default Navbar;