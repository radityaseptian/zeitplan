/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {MdArrowForwardIos } from 'react-icons/md'
import Profil from './Profil'

export default function CardReview({
  value,
  children,
  slider = false,
  name,
  status,
  image,
  shadow = 'shadow-black/5'
}) {
  return (
    <>
      <div className={`${shadow} bg-white p-6 md:p-8 shadow-xl rounded-md hover:scale-105 duration-200`}>
        <Star value={value} />
        <q className='leading-6 text-sm'>{children}</q>
        <div className='flex items-center'>
          <div className='flex gap-4 pt-4 flex-1'>
            <span>
              <Profil image={image} />
            </span>
            <div className='md:flex md:justify-center md:flex-col'>
              <h5 className='text-sm md:text-base'>{name}</h5>
              <p className='text-[.75rem] lg:text-sm font-poppins text-[#0e144a69]'>
                {status}
              </p>
            </div>
          </div>
          {slider && (
            <a href='#testimoni'>
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
