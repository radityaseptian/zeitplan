/* eslint-disable react/prop-types */
import ceklis from '../../assets/image/ceklis.png'

export default function ListBenefit({ children }) {
  return (
    <li className='flex items-center gap-2 lg:gap-3 pt-2 md:pt-3 lg:pt-4'>
      <img src={ceklis} />
      <span className='font-poppins'>{children}</span>
    </li>
  )
}
