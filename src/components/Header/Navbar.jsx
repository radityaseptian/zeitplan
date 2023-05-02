/* eslint-disable no-undef */
import { RxHamburgerMenu } from 'react-icons/rx'
import { HiArrowRight } from 'react-icons/hi'
import NavLogo from './NavLogo'
import { navList } from './NavList'
import { useState } from 'react'
import NavSlider from './NavSlider'

export default function Navbar() {
  const [slider, setSlider] = useState(false)
  const [active, setActive] = useState('#home')
  const actived = (href) => {
    setActive(href)
  }
  return (
    <>
      <div className='z-10 fixed top-0 md:top-4 w-full'>
        <div className='container mx-auto lg:px-2 max-w-6xl shadow-2xl shadow-[#0000000c] bg-white'>
          <nav>
            <div className='flex items-center justify-between h-16 lg:h-[5.2rem] px-5 lg:px-10 lg:rounded-b-md'>
              <div
                onClick={() => setSlider(!slider)}
                className='p-1 md:hidden rounded border-[1.1px] border-[#3f3f3f44] bg-white/80 cursor-pointer'
              >
                <RxHamburgerMenu className='box-border w-6 h-6' />
              </div>
              <NavLogo />
              <ul className='hidden md:flex items-center gap-5 md:gap-8 lg:gap-10 text-sm md:text-base'>
                {navList.map((list) => {
                  return (
                    <li key={list.name}>
                      <a
                        href={list.href}
                        onClick={() => actived(list.href)}
                        className={
                          active === list.href
                            ? 'font-source-sans font-semibold text-[#fe5d44] cursor-pointer'
                            : 'text-black/50 font-source-sans hover:text-[#fe5d44] cursor-pointer'
                        }
                      >
                        {list.name}
                      </a>
                    </li>
                  )
                })}
                <li className='font-sans font-semibold text-white shadow-lg shadow-[#fe5d444d]'>
                  <a
                    href='#download'
                    className='flex items-center gap-2 lg:gap-3 text-sm hover:bg-[#fe7944] bg-[#fe5e44] px-4 py-2 rounded lg:rounded-[5px]'
                  >
                    <span>Download</span>
                    <HiArrowRight />
                  </a>
                </li>
              </ul>
            </div>
            {slider && <NavSlider />}
          </nav>
        </div>
      </div>
    </>
  )
}
