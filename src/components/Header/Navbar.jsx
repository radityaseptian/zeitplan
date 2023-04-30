import { RxHamburgerMenu } from 'react-icons/rx'
import NavItems from './NavItems'
import NavLogo from './NavLogo'

export default function Navbar() {
  return (
    <>
      <div className='container lg:px-2 sticky top-0 mx-auto max-w-6xl shadow-2xl shadow-[#00000008]'>
        <nav>
          <div className='flex items-center justify-between h-16 lg:h-[6rem] px-5 lg:px-10 bg-white lg:rounded-b-md'>
            <div className='p-1 md:hidden rounded border-[1.1px] border-[#fe5e44] bg-white/80 cursor-pointer'>
              <RxHamburgerMenu className='box-border w-6 h-6' />
            </div>
            <NavLogo />
            <ul className='hidden md:flex gap-5 md:gap-8 lg:gap-10 text-sm md:text-base'>
              <NavItems href={'#home'} id='home'>
                Home
              </NavItems>
              <NavItems href={'#fitur'} id='fitur'>
                Fitur-Fitur
              </NavItems>
              <NavItems href={'#harga'} id='harga'>
                Harga
              </NavItems>
              <NavItems href={'#testimoni'} id='testimoni'>
                Testimoni
              </NavItems>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
// {
/* <div className='flex items-center px-3 text-sm rounded gap-1 bg-[#fe5e44] py-2 text-white'>
              <span>Download</span>
              <FiArrowRight />
            </div> */
// }
