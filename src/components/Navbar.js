/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// import StaggeredDropDown from "./StaggeredDropdown"
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

import logo from '../images/logo.png';
import avatar from '../images/avatar.svg';
import bg from '../images/bg.svg';
import {
    FaXmark
} from "react-icons/fa6";


const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #4d4dff;
    }
`;

function Navbar() {
    const [showModal, setShowModal] = useState();

    function handleClick() {
        setShowModal(!showModal);
    }

    function Modal() {
        return (
            <div className={showModal ? 'modal' : 'hidden'}>
                <div className='m-4 ms-8 text-4xl cursor-pointer' onClick={() => setShowModal(!showModal)}>
                    <FaXmark className={showModal ? '' : 'hidden'} />
                </div>
                <div className='container-modal rounded-md z-10 w-[85%] h-[85%] bg-white m-auto'>
                    <div className='absolute flex justify-center items-center w-[85%] text-xl font-bold'>
                        <h3 className='mx-3 border-b-[3px] border-[#F53D37] p-2 mt-2'>sing up</h3>
                        <h3 className='mx-3 border-b-[3px] border-[#F53D37] p-2 mt-2'>login</h3>
                    </div>
                    <img className="wave absolute h-[85%] z-[1] rounded-md" src={require('../images/wave.png')} />
                    <div className="container">
                        <div className="flex justify-end items-center">
                            <img className='w-[470px] relative z-[3] -left-12' src={bg} />
                        </div>
                        <div className="login-content flex justify-start items-center text-center">
                            <form className='w-[360px] mt-20 relative' action="index.html">
                                <img className='h-[100px] m-auto' src={avatar} />
                                <h2 className="title my-4 text-[#333] font-medium uppercase text-5xl">Welcome</h2>
                                <div className='input-div one'>
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <input type="text" id="name-input" className='input' required />
                                    <label for="name-input" className="input-lable font-semibold">Username</label>
                                </div>
                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <input type="text" id="pass-input" className='input' required />
                                    <label for="pass-input" className="input-lable font-semibold">Password</label>
                                </div>
                                <a href="#" className='block text-right no-underline font-semibold text-[#999] text-[0.89rem] transition-colors -mt-2 hover:text-[#F53D37]'>Forgot Password?</a>
                                <input type="submit" className="btn " value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <nav id='navbar' className="flex justify-between items-center px-14 z-10">
            <a href="#" className="navbar-brand w-3/12">
                <NavLink className='font-medium' to="/" >
                    <img src={logo} alt="logo" className='mt-2' />
                </NavLink>
            </a>
            <ul className="navbar-nav flex items-center justify-center -mt-1 w-6/12">
                <NavLink className='font-medium' to="/" >
                    Home
                </NavLink>
                <NavLink className='font-medium' to="/menu" >
                    {/* <StaggeredDropDown /> */}
                    Menu
                </NavLink>
                <NavLink className='font-medium' to="/about" >
                    About Us
                </NavLink>
                <NavLink className='font-medium' to="/contact" >
                    Contact
                </NavLink>
                <NavLink className='font-medium' to="/reservations" >
                    Reservations
                </NavLink>
            </ul>
            <div className="w-3/12 h-12 text-end z-[2]">
                {(() => {
                    const location = useLocation();
                    if (location.pathname !== '/') {
                        return (
                            <>
                                <a href="#" className='hover:opacity-60 z-10 transition-opacity inline-block'>
                                    <i className="fa-solid fa-bag-shopping fa-2xl text-[#2E1B1B] me-5" />
                                </a>
                                <button onClick={handleClick} type="button" className='text-lg font-medium border-2 border-[#2E1B1B] bg-white text-[#2E1B1B] rounded py-1 px-2 mx-1'>Sing up</button>
                                <button onClick={handleClick} type="button" className='text-lg font-medium border-2 border-[#2E1B1B] text-white bg-[#2E1B1B] rounded py-1 px-2 mx-1'>Sing in</button>
                                <Modal />
                            </>
                        )
                    } else {
                        return (
                            <>
                                <a href="#" className='hover:opacity-60 z-10 transition-opacity inline-block'>
                                    <i className="fa-solid fa-bag-shopping fa-2xl text-white me-5" />
                                </a>
                                <button onClick={handleClick} type="button" className='text-lg font-medium border-2 border-white text-[#F53D37] bg-white rounded py-1 px-2 mx-1'>Sing up</button>
                                <button onClick={handleClick} type="button" className='text-lg font-medium border-2 border-white text-white rounded py-1 px-2 mx-1'>Sing in</button>
                                <Modal />
                            </>
                        )
                    }
                })()}
            </div>
        </nav>
    );
}


export default Navbar;