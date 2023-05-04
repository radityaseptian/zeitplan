/* eslint-disable react/prop-types */
import { HiArrowRight } from 'react-icons/hi'

export default function NavSlider({ slid }) {
  return (
    <>
      <div className='text-sm p-2 overflow-hidden md:hidden [&>ul>li]:p-2'>
        <ul>
          <Items onClick={() => slid.setSlider(!slid.slid)} href='#home'>
            Home
          </Items>
          <Items onClick={() => slid.setSlider(!slid.slid)} href='#fitur'>
            Fitur-fitur
          </Items>
          <Items onClick={() => slid.setSlider(!slid.slid)} href='#harga'>
            Harga
          </Items>
          <Items onClick={() => slid.setSlider(!slid.slid)} href='#testimoni'>
            Testimoni
          </Items>
          <li className='font-sans font-semibold text-white'>
            <a
              href='#download'
              className='flex items-center gap-2 text-sm hover:bg-[#fe7944] bg-[#fe5e44] px-4 py-2 rounded'
            >
              <span>Download</span>
              <HiArrowRight />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

function Items({ href, children }) {
  return (
    <li>
      <a href={href} className='p-2 hover:text-[#fe5d44]'>
        {children}
      </a>
    </li>
  )
}
