import React, { useState } from 'react'
import Image from 'next/image'
import './FaqItem.css'
import arrow from '../../public/assets/arrow.svg'

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAnswer = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className='faq-item mb-4'>
      <div className="faq-question mb-3 flex gap-4 cursor-pointer" onClick={toggleAnswer}>
        <span><Image className={`transition ${isOpen ? 'rotate-90' : '' }`} src={arrow} alt="иконка стрелки" /></span>
        {question}
      </div>
      <div className={`hidden mb-5 ml-6 ${isOpen ? 'open' : ''}`}>{answer}</div>
    </div>
  );
};
export default FaqItem