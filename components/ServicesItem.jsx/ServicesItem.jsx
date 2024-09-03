'use client'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import iconArrow from '../../public/assets/arrow-link.svg'


const ServicesItem = ({title}) => {
    return (
        <div className='max-w-2xl w-full rounded-3xl pt-8 pl-8 pb-2.5 pr-2.5 border-2 border-solid border-white-550 bg-white'>
            <h3 className='font-inter text-2xl font-bold'>{title}</h3>
            <ScrollLink to="form" spy={true} smooth={true} duration={500} offset={-100}><div className='flex justify-end'><Image src={iconArrow} alt="link" /></div></ScrollLink>
        </div>
    );
};

export default ServicesItem
