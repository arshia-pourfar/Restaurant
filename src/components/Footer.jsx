import React from 'react';

function Footer() {
    return (
        <>
            <footer className="footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-14 pt-6 text-black border-t-2 px-6 lg:px-12 gap-8">
                {/* لوگو و آیکون‌ها */}
                <div className="text-left">
                    <img
                        className="w-[95px] mx-auto -rotate-6"
                        src={require('../images/logo.png')}
                        alt="Logo"
                    />
                    <ul className="mt-4 flex justify-center lg:justify-center flex-wrap gap-3 text-zinc-800">
                        {['instagram', 'telegram', 'whatsapp', 'twitter'].map((icon) => (
                            <li
                                key={icon}
                                className="text-[28px] border-[#2E1B1B] border-2 text-[#2E1B1B] w-[45px] h-[45px] flex items-center justify-center rounded-full"
                            >
                                <i className={`fab fa-${icon}`} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="text-base lg:text-left text-center">
                    <h1 className="font-bold text-xl mb-3">Useful Links</h1>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>How we work</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Content */}
                <div className="text-base lg:text-left text-center">
                    <h1 className="font-bold text-xl mb-3">Content</h1>
                    <ul className="space-y-2">
                        <li>Home</li>
                        <li>Brows Menu</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Address */}
                <div className="text-base lg:text-left text-center">
                    <h1 className="font-bold text-xl mb-3">Address</h1>
                    <ul className="space-y-2">
                        <li>Lorem ipsum dolor St</li>
                        <li>testemail@gmail.com</li>
                        <li>888-123-42278</li>
                    </ul>
                </div>
            </footer>

            <span className="text-center block my-6 text-sm text-gray-500">
                Copyright © 2023 All rights reserved
            </span>
        </>
    );
}

export default Footer;