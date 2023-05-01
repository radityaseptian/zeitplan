export default function HeroButton() {
  return (
    <>
      <div className='flex gap-2 items-center font-source-sans font-semibold text-sm md:text-base mb-8 lg:mb-16'>
        <button className='px-8 py-3 lg:px-10 text-white bg-[#fe5e44] rounded shadow-xl shadow-[#fe5d4446] hover:bg-[#fe7944]'>
          Learn More
        </button>
        <button className='px-8 py-3 lg:px-10 bg-[#fe5d441c] rounded text-[#fe5e44] border-[1px] border-[#fe5d4421]'>
          Play Demo
        </button>
      </div>
    </>
  )
}
