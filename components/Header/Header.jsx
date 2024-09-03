"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import "./Header.css"
import logo from "../../public/assets/logo.png"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

const Header = () => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsFixed(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={isFixed ? "fixed w-full bg-white z-10 shadow" : "relative"}
    >
      <div className="container">
        <div className=" h-24 flex justify-between items-center">
          <div className="logo">
            <a href="/">
              <Image className="w-22 h-20" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="hidden lg:flex gap-10">
            <ul className="flex gap-14">
              <li>
                <ScrollLink
                  className="text-base font-normal cursor-pointer"
                  to="types"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Виды страхования
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="text-base font-normal cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Полезные услуги
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="text-base font-normal cursor-pointer"
                  to="faq"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  FAQ
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="text-base font-normal cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Контакты
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="salons">
            <ScrollLink
              className="w-48 hidden lg:inline-block text-center bg-blue-750 rounded-full pt-3 pb-3 text-white mr-5 cursor-pointer"
              to="form"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Оформить
            </ScrollLink>
          </div>
          <BurgerMenu />
        </div>
        <span className="line"></span>
      </div>
    </header>
  )
}

export default Header
