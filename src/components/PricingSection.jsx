import React from 'react';
import { pricedata } from './constants';
import checkIcon from '../assets/images/icon-check.svg';

const PricingSection = () => {
    return (
        <section className="pt-12 pb-1 bg-white mb-12 sm:pt-16 xl:pt-24 lg:pt-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="max-w-lg mx-auto text-center lg:max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl 2xl:text-6xl text-gray-950">
                        {pricedata.header.title}
                    </h2>
                    <p className="max-w-xl mx-auto mt-5 text-base font-normal leading-7 text-gray-600 lg:leading-9 lg:text-xl sm:text-lg sm:leading-8">
                        {pricedata.header.subtitle}
                    </p>
                </div>

                <div className="max-w-xl mx-auto mt-12 rounded-3xl ring-1 ring-gray-200 sm:mt-16 lg:flex lg:items-center lg:max-w-5xl">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            {pricedata.pricingCard.content.title}
                        </h3>
                        <p className="mt-4 text-base leading-7 text-gray-600 lg:mt-6">
                            {pricedata.pricingCard.content.description}
                        </p>

                        <div className="flex items-center mt-10 gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">
                                {pricedata.pricingCard.content.includedTitle}
                            </h4>
                            <div className="flex-auto h-px bg-gray-200"></div>
                        </div>

                        <ul role="list" className="grid grid-cols-1 gap-4 mt-6 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                            {pricedata.pricingCard.content.features.map((feature, index) => (
                                <li key={index} className="flex gap-x-3">
                                    <img className="flex-none w-5 h-5 shrink-0" src={checkIcon} alt="Check Icon" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
                            <div className="max-w-xs px-8 mx-auto">
                                <p className="text-base font-semibold text-gray-600">
                                    {pricedata.pricingCard.priceBox.priceLabel}
                                </p>
                                <p className="flex items-center justify-center mt-6 gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                                        {pricedata.pricingCard.priceBox.priceValue}
                                    </span>
                                    <strike className="text-4xl font-semibold leading-6 tracking-wide text-gray-400">
                                        {pricedata.pricingCard.priceBox.strikePrice}
                                    </strike>
                                </p>
                                <div className="w-full mt-10">
                                    <a
                                        href={pricedata.pricingCard.priceBox.cta.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full px-8 py-4 text-base font-semibold text-white transition-all duration-150 rounded-full shadow-sm bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                                    >
                                        {pricedata.pricingCard.priceBox.cta.text}
                                    </a>
                                </div>

                                <div className="flex flex-col items-center mt-10 gap-y-3 gap-x-4">
                                    <div className="flex -space-x-2 overflow-hidden transition-all duration-150 isolate hover:-space-x-1">
                                        {pricedata.pricingCard.priceBox.members.avatars.map((avatar, index) => (
                                            <img
                                                key={index}
                                                className="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                                                src={avatar}
                                                alt={`Avatar ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-gray-950">
                                        {pricedata.pricingCard.priceBox.members.memberText}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
