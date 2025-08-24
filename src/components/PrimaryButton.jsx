import React from 'react';
import {HiArrowRight} from "react-icons/hi2";

const PrimaryButton = ({children, cn}) => {
    return (
        <div>
            <button
                className={`${cn} py-2 transition-colors duration-500 w-fit px-4 flex items-center justify-center gap-x-2 rounded-full font-bold`}>
                {children} <HiArrowRight strokeWidth={2}/>
            </button>
        </div>
    );
};

export default PrimaryButton;