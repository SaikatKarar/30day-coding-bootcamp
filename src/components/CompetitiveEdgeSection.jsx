import React from 'react';
import guideIcon from '../assets/images/icon-guides-2.svg';
import jobIcon from '../assets/images/icon-job.svg';
import tipsIcon from '../assets/images/icon-tips.svg';
import illustrationJob from '../assets/images/illustration-job.svg';

const CompetitiveEdgeSection = () => {
    return (
        <section className="py-12 bg-white sm:py-16 xl:py-24 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 group lg:grid-cols-2 gap-y-12 lg:gap-x-16 lg:items-center lg:max-w-5xl lg:mx-auto">
                    <div className="text-center lg:text-left">
                        <div className="max-w-lg mx-auto lg:max-w-none lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl text-gray-950">
                                Gain a competitive edge in job market
                            </h2>
                            <p className="mt-5 text-base font-normal leading-7 text-gray-600 lg:leading-9 lg:text-xl sm:text-lg sm:leading-8">
                                Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.
                            </p>
                        </div>

                        <p className="mt-8 text-sm font-bold tracking-widest uppercase sm:text-base text-primary-600 sm:mt-10">
                            what you'll get
                        </p>

                        <ul className="flex flex-col items-center mt-4 text-base sm:mt-6 sm:text-lg lg:text-xl text-gray-950 gap-y-6 sm:flex-row sm:gap-x-8 sm:max-w-md sm:mx-auto sm:items-start lg:flex-col lg:items-start lg:mx-0 lg:max-w-none">
                            <li className="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                                <img className="w-6 h-6 shrink-0" src={guideIcon} alt="Comprehensive guides, projects, & courses" />
                                Comprehensive guides, projects, & courses
                            </li>

                            <li className="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                                <img className="w-6 h-6 shrink-0" src={jobIcon} alt="Exclusive job + internship postings" />
                                Exclusive job + internship postings
                            </li>

                            <li className="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                                <img className="w-6 h-6 shrink-0" src={tipsIcon} alt="1:1 Career guidance & mentorship" />
                                1:1 Career guidance & mentorship
                            </li>
                        </ul>
                    </div>

                    <div>
                        <img className="h-auto mx-auto transition-all duration-200 w-60 sm:w-full sm:max-w-xs lg:max-w-none group-hover:rotate-6" src={illustrationJob} alt="Illustration of job market" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveEdgeSection;
