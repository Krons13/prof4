import React from 'react'
import Image from 'next/image'

const TypesInsuranceItem = ({width, title, icon}) => {
    return (
        <div className={width + ` w-full flex flex-col p-8 rounded-3xl border-2 border-solid border-white-550`}>
            <div className='flex justify-end'><Image src={icon} alt="icon car" /></div>
            <div className='font-inter font-bold text-sm'>{title}</div>
        </div>
    )
};

export default TypesInsuranceItem