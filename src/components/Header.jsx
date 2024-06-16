import React from 'react';
import { useLocation } from 'react-router-dom';

import logo from '../assets/images/logo.svg';
import { navigation } from './constants';

const Header = () => {
    const pathname = useLocation()
    return (
        <header className='sticky inset-x-0 top-0 z-50 w-full py-4 bg-white/90 backdrop-blur-lg px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
            {/* -- START HEADER -- */}
            <div className="flex items-center justify-between gap-6">
                <a href="#" title="30 Days of Coding" className="flex items-center shrink-0">
                    <img className="w-auto h-10 sm:h-12" src={logo} alt="30 Days of Coding logo" />
                </a>

                <nav className="hidden p-1 bg-gray-100 rounded-full md:justify-center md:items-center md:flex">
                    {navigation.map((item) => (
                        <a key={item.id} href={item.url} className={`block relative text-sm font-medium  items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white active:bg-white active:text-gray-900 transition-all duration-150 rounded-full px-3.5 py-2 ${item.onlyMobile ? "lg:hidden" : ""} `}>
                            {item.title}
                        </a>
                    ))}
                </nav>
                <a href="#" title="" target="_blank" rel="noreferrer"
                    className="rounded-full bg-primary-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-all duration-150"
                    role="button">
                    Join Community
                </a>
            </div>
        </header>
    );
};

export default Header;

// ${item.url === pathname.hash ? "z-2 lg:text-[#FFFFFF]" : "lg:text-[#FFFFFF]/50"}