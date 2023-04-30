import { FiArrowRight } from 'react-icons/fi'

export default function HeroButton() {
  return (
    <>
      <div className="flex gap-2 items-center font-source-sans font-semibold text-sm md:text-base mb-8 lg:mb-16">
        <button className="px-8 py-3 cursor-not-allowed text-white bg-[#fe5e44] rounded flex items-center gap-2 shadow-xl shadow-[#fe5d442a]">
          <span>Download</span>
          <FiArrowRight />
        </button>
        <button className="px-8 py-3 cursor-not-allowed bg-[#fe5d441c] rounded text-[#fe5e44] border-[1px] border-[#fe5d4421]">Learn More</button>
      </div>
    </>
  )
}
