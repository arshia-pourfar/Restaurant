import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import Modal from './LoginModal';

function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const handleClick = () => setShowModal(!showModal);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/menu', label: 'Menu' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
        { to: '/reservations', label: 'Reservations' },
    ];

    return (
        <nav id="navbar" className="relative flex justify-between items-center lg:py-2 px-4 lg:px-10">
            {/* Logo */}
            <div className="basis-3/12">
                <NavLink to="/" className="inline-block">
                    <img src={logo} alt="logo" className="w-[80px]" />
                </NavLink>
            </div>

            {/* Hamburger button for mobile */}
            <button
                className="lg:hidden text-2xl z-50"
                onClick={toggleMobileMenu}
            >
                <i className="fa-solid fa-bars" />
            </button>

            {/* Navigation Links - Desktop */}
            <ul className="hidden lg:flex justify-center items-center basis-6/12 font-medium">
                {navLinks.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `relative px-4 py-2 xl:text-base text-sm tracking-wide cursor-pointer
              after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full
              after:h-[3px] after:bg-red after:rounded after:transition-transform after:origin-left
              hover:after:scale-100
              ${isActive ? 'text-red font-bold after:scale-100' : 'text-black after:scale-0'}`
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </ul>

            {/* Right Buttons */}
            <div className="basis-3/12 text-end z-50 hidden lg:flex items-center justify-end gap-3 ">
                <a href="./" className="inline-block hover:opacity-60 transition-opacity">
                    <i
                        className={`fa-solid fa-bag-shopping xl:text-3xl text-2xl ${location.pathname === '/' ? 'text-white' : 'text-black'
                            }`}
                    />
                </a>
                <button
                    onClick={handleClick}
                    className={`xl:text-lg text-sm font-medium border-2 rounded py-1 px-2 ${location.pathname === '/'
                        ? 'border-white text-red bg-white'
                        : 'border-black text-black bg-white'
                        }`}
                >
                    Sign Up
                </button>
                <button
                    onClick={handleClick}
                    className={`xl:text-lg text-sm font-medium border-2 rounded py-1 px-2 ${location.pathname === '/'
                        ? 'border-white text-white bg-transparent'
                        : 'border-black text-white bg-black'
                        }`}
                >
                    Sign In
                </button>
                <Modal modalStatus={showModal} onClose={() => setShowModal(false)} />
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 lg:hidden">
                    <ul className="flex flex-col items-center pb-4 font-medium">
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-2 text-sm text-black hover:text-red"
                            >
                                {label}
                            </NavLink>
                        ))}
                        <div className='flex gap-5 mt-4'>
                            <button
                                onClick={handleClick}
                                className={`xl:text-lg text-sm font-medium border-2 border-black rounded py-1 px-2 text-black`}
                            >
                                Sign Up
                            </button>
                            <button
                                onClick={handleClick}
                                className={`xl:text-lg text-sm font-medium border-2 border-black rounded py-1 px-2 text-black`}
                            >
                                Sign In
                            </button>
                            <Modal modalStatus={showModal} onClose={() => setShowModal(false)} />
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;