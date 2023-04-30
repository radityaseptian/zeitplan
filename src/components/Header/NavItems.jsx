/* eslint-disable react/prop-types */
export default function NavItems({ href,children,id }) {
  return (
    <>
        <li>
          <a href={href} id={id} className="target:text-[#fe5e44] text-black/50 font-source-sans ">{children}</a>
        </li>
    </>
  )
}
