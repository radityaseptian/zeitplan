/* eslint-disable react/prop-types */
export default function CardPromosi({img,title,children}) {
  return (
    <>
      <div className="p-4 rounded text-sm bg-[#fe5d440c]">
        <div className="flex gap-4 items-center">
          <img src={img} />
          <span className="font-source-sans font-semibold">{title}</span>
        </div>
        <p className="font-source-sans py-4">{children}</p>
      </div>
    </>
  )
}
