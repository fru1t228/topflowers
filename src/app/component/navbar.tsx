// @ts-nocheck
'use client'
import React, { useEffect, useState } from "react";
import { Link as Link2, scrollSpy } from "react-scroll";
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Navbar({navdark}:{navdark:boolean}){
  const [isOpen, setMenu] = useState(true);
  
  useEffect(()=>{
    window.addEventListener("scroll", windowScroll);
    window.scrollTo(0, 0);
    scrollSpy.update();
    return()=>{
      window.removeEventListener( 'scroll', windowScroll )
    }
  },[])

  const toggleMenu = () => {
    setMenu(!isOpen)
  }

  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("is-sticky");
    } else {
      navbar.classList.remove("is-sticky");
    }
  }

  return(
    <>
      <nav className="navbar" id="navbar">
        <div className="container flex flex-wrap items-center justify-end">
          {navdark && (
            <Link className="navbar-brand" href="/">
              <span className="text-2xl font-bold text-white">Flora Luxe</span>
            </Link>
          )}
          {!navdark && (
            <Link className="navbar-brand" href="/">
              <span className="text-2xl font-bold text-white">Flora Luxe</span>
            </Link>
          )}

          {navdark && (
            <ul className="list-none menu-social mb-0">
              <li className="inline ms-1">
                <Link href="#" className="btn btn-sm btn-icon rounded-full bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white">
                  <FaWhatsapp />
                </Link>
              </li>
              <li className="inline ms-1">
                <Link href="#" className="btn btn-sm btn-icon rounded-full bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white">
                  <FiInstagram />
                </Link>
              </li>
              <li className="inline ms-1">
                <Link href="#" className="btn btn-sm btn-icon rounded-full bg-pink-600 hover:bg-pink-700 border-pink-600 hover:border-pink-700 text-white">
                  <FaTelegram />
                </Link>
              </li>
            </ul>
          )}

          <button
            type="button"
            className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu mdi-24px"></i>
          </button>
        </div>

        <div
          className={`${isOpen === true ? 'hidden' : 'block'} navigation lg_992:order-1 lg_992:flex`}
          id="menu-collapse"
        >
          <ul className={`navbar-nav ${navdark ? '' : 'nav-light'}`} id="navbar-navlist">
            <Link2
              className="nav-item"
              to="home"
              activeclassname="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="nav-link text-lg md:text-xl font-medium transition-colors duration-300 hover:text-[#ec4899]">
                Главная
              </span>
            </Link2>
            <Link2
              className="nav-item"
              to="catalog"
              activeclassname="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="nav-link text-lg md:text-xl font-medium transition-colors duration-300 hover:text-[#ec4899]">
                Каталог букетов
              </span>
            </Link2>
            <Link2
              className="nav-item"
              to="about"
              activeclassname="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="nav-link text-lg md:text-xl font-medium transition-colors duration-300 hover:text-[#ec4899]">
                О магазине
              </span>
            </Link2>
            <Link2
              className="nav-item"
              to="contact"
              activeclassname="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              <span className="nav-link text-lg md:text-xl font-medium transition-colors duration-300 hover:text-[#ec4899]">
                Связаться с нами
              </span>
            </Link2>
          </ul>
        </div>
      </nav>
    </>
  )
}   