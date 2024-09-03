'use client'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const ButtonBlue = ({title}) => {
    return (
        <ScrollLink className='w-48 inline-block text-center bg-blue-750 rounded-cm pt-3 pb-3 text-white mr-5 cursor-pointer' to="form" spy={true} smooth={true} duration={500} offset={-100}>{title} </ScrollLink>
    );
};

export default ButtonBlue