/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import profil from '../assets/image/profil.jpg'
import {MdArrowForwardIos } from 'react-icons/md'

export default function CardReview({
  value,
  children,
  slider = false,
  name,
  status,
  shadow = 'shadow-black/5'
}) {
  return (
    <>
      <div className={`${shadow} bg-white p-6 md:p-8 shadow-xl rounded-md`}>
        <Star value={value} />
        <q className='leading-6 text-sm'>{children}</q>
        <div className='flex items-center'>
          <div className='flex gap-4 pt-4 flex-1'>
            <span>
              <img src={profil} className='w-10 h-10 rounded-full md:w-11 md:h-11 lg:w-[3.438rem] lg:h-[3.438rem]' />
            </span>
            <div className='md:flex md:justify-center md:flex-col'>
              <h5 className='text-sm md:text-base'>{name}</h5>
              <p className='text-[.75rem] lg:text-sm font-poppins text-[#0e144a69]'>
                {status}
              </p>
            </div>
          </div>
          {slider && (
            <a href='#review'>
              <MdArrowForwardIos className='text-[#fe5d44] bg-[#fe5d441c] cursor-pointer p-3 box-content mt-3 rounded-full' />
            </a>
          )}
        </div>
      </div>
    </>
  )
}

function Star({ value }) {
  return (
    <>
      <div className='flex items-center gap-1 mb-4'>
        <span
          className={
            value >= 1
              ? 'px-[.1rem] h-5 flex items-center text-white rounded bg-[#FFC93F]'
              : 'px-[.1rem] h-5 flex items-center text-white rounded bg-black/20'
          }
        >
          &#9733;
        </span>
        <span
          className={
            value >= 2
              ? 'px-[.1rem] h-5 flex items-center text-white rounded bg-[#FFC93F]'
              : 'px-[.1rem] h-5 flex items-center text-white rounded bg-black/20'
          }
        >
          &#9733;
        </span>
        <span
          className={
            value >= 3
              ? 'px-[.1rem] h-5 flex items-center text-white rounded bg-[#FFC93F]'
              : 'px-[.1rem] h-5 flex items-center text-white rounded bg-black/20'
          }
        >
          &#9733;
        </span>
        <span
          className={
            value >= 4
              ? 'px-[.1rem] h-5 flex items-center text-white rounded bg-[#FFC93F]'
              : 'px-[.1rem] h-5 flex items-center text-white rounded bg-black/20'
          }
        >
          &#9733;
        </span>
        <span
          className={
            value >= 5
              ? 'px-[.1rem] h-5 flex items-center text-white rounded bg-[#FFC93F]'
              : 'px-[.1rem] h-5 flex items-center text-white rounded bg-black/20'
          }
        >
          &#9733;
        </span>
      </div>
    </>
  )
}
