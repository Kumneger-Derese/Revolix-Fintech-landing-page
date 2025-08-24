import React from 'react';
import {HiCheck} from "react-icons/hi2";

const List = ({content, bg, color}) => {
    return (
        <div className={'flex items-center gap-x-2'}>
            <div className={`${bg} rounded-full p-1`}>
                <HiCheck size={20} strokeWidth={1} className={`${color}`}/>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default List;