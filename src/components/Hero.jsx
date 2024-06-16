import React from 'react';
import { collabApps } from './constants';
import logo from '../assets/images/logo.svg';

const Hero = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:pb-20 xl:pb-24" id="intro">
            {/* <!-- START HERO --> */}
            <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
                <div className="flex flex-col items-center lg:flex-row gap-y-14 lg:gap-x-16">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
                        <div className="flex flex-col items-center lg:flex-row gap-y-12 lg:gap-x-16">
                            <div className="text-center lg:text-left lg:flex-1 lg:min-w-0">
                                <h1 className="text-6xl font-bold leading-none tracking-tighter uppercase sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl text-primary-950">
                                    <span className="mr-4 font-mono text-primary-500">Attend live</span> classes every week
                                </h1>
                                <h2 className="max-w-lg mx-auto mt-5 text-lg font-normal leading-8 text-gray-600 lg:max-w-none lg:mx-0 sm:leading-8 2xl:leading-9 sm:text-xl 2xl:text-2xl">
                                    Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp
                                    Group for less than
                                    a cup of coffee.
                                </h2>

                                <div className="flex flex-col items-center gap-6 mt-8 lg:items-start xl:flex-row xl:items-center lg:mt-10">
                                    <a href="#" title="" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-150 rounded-full shadow-sm bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500" role="button">
                                        Join 24/7 Whatsapp + discord for $5/month
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:max-w-lg lg:shrink-0 2xl:max-w-xl'>
                        <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-500 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                            <div className="flex w-60 aspect-square m-auto border border-gray-500 rounded-full">
                                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                                        <img
                                            src={logo}
                                            width={48}
                                            height={48}
                                            alt="30 Day Codes"
                                        />
                                    </div>
                                </div>
                            </div>

                            <ul>
                                {collabApps.map((app, index) => (
                                    <li
                                        key={app.id}
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                                            }`}
                                    >
                                        <div
                                            className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-[#FFFFFF]/15 rounded-xl -rotate-${index * 45}`}
                                        >
                                            <img
                                                className="m-auto"
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero;