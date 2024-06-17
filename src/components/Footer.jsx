import React from 'react';
import logo from '../assets/images/logo.svg';
import { footerIcon } from './constants';

const Footer = () => (
    <footer className="pt-12 pb-8 bg-white sm:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
            <div className="relative flex flex-col items-center gap-y-8 md:flex-row md:justify-between">
                <a href="#" title="30 Days of Coding" className="flex items-center shrink-0 md:order-1">
                    <img className="w-auto h-10 sm:h-12" src={logo} alt="DSA revision logo" />
                </a>
                <div className="relative flex items-center justify-center gap-3 md:order-3 sm:justify-end">
                    {footerIcon.map(({ href, title, icon }) => (
                        <a key={title} href={href} title={title} className="p-2 transition-all duration-150 rounded-full group hover:bg-primary-50 ring-1 ring-transparent ring-inset hover:ring-primary-200" target="_blank" rel="noopener">
                            <span className="sr-only">{title}</span>
                            <img className="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0" src={icon} alt={title} />
                        </a>
                    ))}
                </div>
                <p className="flex items-center justify-center font-bold text-base  text-gray-500 md:absolute md:inset-0 md:order-2">
                    2023 © DSA revision
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
