import React from 'react';
import { benefits } from './constants';

const Benefits = () => {
    return (
        <div className="flex flex-wrap items-center justify-center mb-16 gap-y-8 gap-x-16 ">
            {benefits.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                    <img className="w-8 h-8 shrink-0" src={item.icon} alt="" />
                    <h3 className="text-lg font-medium text-gray-950">
                        {item.title}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default Benefits;
