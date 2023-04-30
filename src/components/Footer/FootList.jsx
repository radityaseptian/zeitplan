/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function FootList({ children, href }) {
  return (
    <>
      <li className='text-sm lg:text-base text-[#0c1b4da4]'>
        <a href={href}>{children}</a>
      </li>
    </>
  )
}
