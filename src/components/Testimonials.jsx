import React from 'react';
import { testimonials } from './constants';

const Testimonials = () => {
    return (
        <>
            {/* -- START PRICING -- */}
            <section className="py-12 bg-white sm:py-16 xl:py-24 lg:py-20" id="testimonials">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
                    <div className="grid max-w-lg grid-cols-1 mx-auto text-center lg:grid-cols-3 gap-y-16 lg:gap-x-16 lg:max-w-5xl 2xl:max-w-7xl">
                        {testimonials.map((item) => (
                            <div className="space-y-4 lg:space-y-6" key={item.id}>
                                <div className="w-24 h-24 mx-auto overflow-hidden transition-all duration-200 rounded-full group hover:shadow-lg hover:-translate-y-2 ring-1 ring-gray-100">
                                    <img
                                        className="object-cover transition-all duration-200 group-hover:scale-125"
                                        src={item.icon}
                                        alt="Aryan Singh"
                                    />
                                </div>
                                <blockquote>
                                    <p className="text-base font-normal leading-7 lg:text-lg lg:leading-8 text-gray-950">
                                        {item.title}
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-sm font-bold sm:text-base text-gray-950">{item.name}</p>
                                    <p className="mt-1 text-sm font-normal text-gray-600 sm:text-base">{item.company}</p>
                                </div>
                                <div className="flex items-center justify-center gap-1">
                                    <img className="w-6 h-6" src={item.starIcon} alt="Star" />
                                    <img className="w-6 h-6" src={item.starIcon} alt="Star" />
                                    <img className="w-6 h-6" src={item.starIcon} alt="Star" />
                                    <img className="w-6 h-6" src={item.starIcon} alt="Star" />
                                    <img className="w-6 h-6" src={item.starIcon} alt="Star" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;