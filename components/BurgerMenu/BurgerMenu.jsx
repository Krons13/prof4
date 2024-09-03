import React, {useState} from 'react'
import { Link } from 'react-scroll'
import './BurgerMenu.css'

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
      }
    
    return (
        <>
        <nav className='nav block lg:hidden'>
            <div className={`relative z-50 ${open ? 'active' : '' }`} onClick={toggleMenu}>
                <div className="hamburger">
                    <span className="hamburger-line line-1"></span>
                    <span className="hamburger-line line-2"></span>
                    <span className="hamburger-line line-3"></span>
                </div>
            </div>
            
            <ul className={open ? "show" : ""}>
                <li><Link className='text-xl font-normal cursor-pointer' to="types" spy={true} smooth={true} duration={500} offset={-100} onClick={() => {setOpen(!open)}}>Виды страхования</Link></li>
                <li><Link className='text-xl font-normal cursor-pointer' to="services" spy={true} smooth={true} duration={500} offset={-100}
                onClick={() => {setOpen(!open)}}>Полезные услуги</Link></li>
                <li><Link className='text-xl font-normal cursor-pointer' to="faq" spy={true} smooth={true} duration={500} offset={-100} onClick={() => {setOpen(!open)}}>FAQ</Link></li>
                <li><Link className='text-xl font-normal cursor-pointer' to="about" spy={true} smooth={true} duration={500} onClick={() => {setOpen(!open)}}>Контакты</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default BurgerMenu;