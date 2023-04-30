/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

export default function CardHarga({ status, harga, children,konten }) {
  return (
    <>
      <div className='bg-white shadow-black/5 max-w-sm shadow-xl m-2 px-7 pt-6'>
        <span className='font-poppins text-[#fe5d44] text-xs'>{status}</span>
        <h3 className="text-[#0C0E2B] font-patua text-2xl md:text-3xl lg:text-4xl py-2">{harga}</h3>
        <p className='text-[#0e144a9f] pb-2 md:pb-3 lg:pb-4 text-sm lg:text-base leading-6'>{konten}</p>
        <ul className='font-poppins text-xs'>
          {children}
        </ul>
        <button className="py-3 my-8 font-source-sans font-semibold shadow-lg shadow-[#fe5d4446] bg-[#fe5d44] rounded w-full text-white">Download</button>
      </div>
    </>
  )
}
