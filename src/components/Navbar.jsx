/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import avatar from '../images/avatar.svg';
import bg from '../images/bg.svg';
import wave from '../images/wave.png';
import { FaXmark } from 'react-icons/fa6';


function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    const handleClick = () => setShowModal(!showModal);

    const Modal = () => (
        <div
            className={`fixed top-0 left-0 w-screen h-screen bg-[#22181862] z-50 ${showModal ? 'flex' : 'hidden'
                } items-center justify-center`}
        >
            <div className="absolute top-6 left-6 text-4xl cursor-pointer text-red" onClick={handleClick}>
                <FaXmark />
            </div>
            <div className="relative w-[85%] h-[85%] bg-white rounded-md shadow-lg overflow-hidden">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-6 text-xl font-bold z-10">
                    <h3 className="border-b-4 border-red px-4 py-2 cursor-pointer">Sign Up</h3>
                    <h3 className="border-b-4 border-red px-4 py-2 cursor-pointer">Login</h3>
                </div>
                <img src={wave} className="absolute h-full w-full object-cover opacity-20 z-0" />
                <div className="grid grid-cols-2 gap-[7rem] px-8 w-full h-full items-center z-10 relative">
                    <div className="flex justify-end items-center">
                        <img src={bg} className="w-[470px] -left-12 relative z-10" />
                    </div>
                    <div className="flex justify-start items-center">
                        <form className="w-[360px] mt-20 relative z-10">
                            <img src={avatar} className="h-[100px] mx-auto" />
                            <h2 className="text-5xl font-semibold text-gray-800 uppercase text-center my-4">Welcome</h2>

                            {/* Username */}
                            <div className="relative border-b-2 border-gray-300 py-1 grid grid-cols-[7%_93%] items-center mb-6">
                                <div className="text-gray-400 flex justify-center items-center">
                                    <i className="fas fa-user" />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name-input"
                                        required
                                        className="w-full border-none outline-none bg-transparent peer"
                                    />
                                    <label
                                        htmlFor="name-input"
                                        className="absolute left-[35px] top-[10px] text-gray-500 font-semibold transition-transform peer-focus:translate-y-[-13px] peer-focus:scale-[0.83] peer-valid:translate-y-[-13px] peer-valid:scale-[0.83]"
                                    >
                                        Username
                                    </label>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="relative border-b-2 border-gray-300 py-1 grid grid-cols-[7%_93%] items-center mb-6">
                                <div className="text-gray-400 flex justify-center items-center">
                                    <i className="fas fa-lock" />
                                </div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="pass-input"
                                        required
                                        className="w-full border-none outline-none bg-transparent peer"
                                    />
                                    <label
                                        htmlFor="pass-input"
                                        className="absolute left-[35px] top-[10px] text-gray-500 font-semibold transition-transform peer-focus:translate-y-[-13px] peer-focus:scale-[0.83] peer-valid:translate-y-[-13px] peer-valid:scale-[0.83]"
                                    >
                                        Password
                                    </label>
                                </div>
                            </div>

                            <a
                                href="#"
                                className="block text-right text-sm text-gray-500 hover:text-red transition-colors mb-4"
                            >
                                Forgot Password?
                            </a>

                            <input
                                type="submit"
                                value="Login"
                                className="w-full h-[55px] rounded-full bg-gradient-to-r from-red to-red/80 text-white text-[1.3rem] tracking-[3px] uppercase font-semibold cursor-pointer transition-all duration-500 hover:bg-[position:right]"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

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
                <Modal />
            </div>
        </nav>
    );
}

export default Navbar;