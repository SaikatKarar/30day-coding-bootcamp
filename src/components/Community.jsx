import React from 'react';
import { community } from './constants';

const Community = () => {
    return (
        <>
            <section className="py-12 bg-white sm:py-16 xl:py-24 lg:py-20" id="features">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
                    <div className="max-w-lg mx-auto text-center lg:max-w-3xl">
                        <h4 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-950">
                            Everything you need in <span className="inline sm:block">one community</span>
                        </h4>
                        <p
                            className="max-w-xl mx-auto mt-5 text-base font-normal leading-7 text-gray-600 lg:leading-9 lg:text-xl sm:text-lg sm:leading-8">
                            Unleashing your digital potential for lasting success
                        </p>
                    </div>

                    <div
                        className="grid max-w-md grid-cols-1 mx-auto mt-8 text-center gap-y-12 lg:grid-cols-3 lg:gap-x-16 xl:gap-x-24 sm:mt-12 lg:mt-16 lg:max-w-5xl 2xl:max-w-6xl">
                        {community.map((item) => (
                            <div className="group" key={item.id}>
                                <img className="h-auto mx-auto transition-all duration-200 w-60 xl:max-w-xs lg:group-hover:-translate-y-3"
                                    src={item.icon} alt="" />
                                <h5 className="mt-4 text-xl font-bold tracking-wide uppercase sm:text-2xl sm:mt-6 lg:mt-8 text-gray-950">
                                    {item.title}
                                </h5>
                                <p className="mt-2 text-base font-normal leading-7 text-gray-600 sm:mt-4 sm:text-lg sm:leading-8">
                                    {item.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Community;