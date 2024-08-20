import React from 'react';
function Footer() {
    return (
        <>
            <footer className="footer flex mt-14 pt-6 text-black min-h-[35dvh] border-t-2">
                <div className='basis-1/4 px-4 relative'>
                    <img className='w-[95px] m-auto -rotate-6' src={require('../images/logo.png')} alt="" />
                    <ul className='mt-2 flex items-center justify-center text-zinc-800'>
                        <li className='mx-2 text-[33px] border-[#2E1B1B] border-2 text-[#2E1B1B] w-[50px] h-[50px] flex items-center justify-center rounded-full'><i className='fab fa-instagram rounded-lg'></i></li>
                        <li className='mx-2 text-[33px] border-[#2E1B1B] border-2 text-[#2E1B1B] w-[50px] h-[50px] flex items-center justify-center rounded-full'><i className='fab fa-telegram rounded-lg'></i></li>
                        <li className='mx-2 text-[33px] border-[#2E1B1B] border-2 text-[#2E1B1B] w-[50px] h-[50px] flex items-center justify-center rounded-full'><i className='fab fa-whatsapp rounded-lg'></i></li>
                        <li className='mx-2 text-[33px] border-[#2E1B1B] border-2 text-[#2E1B1B] w-[50px] h-[50px] flex items-center justify-center rounded-full'><i className='fab fa-twitter rounded-lg'></i></li>
                    </ul>
                </div>
                <div className='basis-1/4 px-4 ps-14 text-[17px]'>
                    <h1 className='font-bold text-xl'>Useful Links</h1>
                    <ul className='mt-3 leading-[35px]'>
                        <li>About Us</li>
                        <li>How we work</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='basis-1/4 px-4 ps-14 text-[17px]'>
                    <h1 className='font-bold text-xl'>Content</h1>
                    <ul className='mt-3 leading-[35px]'>
                        <li>Home</li>
                        <li>Brows Menu</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='basis-1/4 px-4 ps-14 text-[17px]'>
                    <h1 className='font-bold text-xl'>Address</h1>
                    <ul className='mt-3 leading-[30px]'>
                        <li>Lorem ipsum dolor St</li>
                        <li>testemail@gmail.com</li>
                        <li>888-123-42278</li>
                    </ul>
                </div>
            </footer>
            <span className='text-center block mb-7'>Copyright © 2023 All rights reserved</span>
        </>
    );
}

export default Footer;