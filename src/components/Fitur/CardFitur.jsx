/* eslint-disable react/prop-types */
export default function CardFitur({img,title,children}) {
  return (
    <>
      <div className="pt-4 pb-4 md:pt-0 rounded text-sm">
        <div>
          <img src={img} className="mb-2" />
          <span className="font-source-sans font-semibold">{title}</span>
        </div>
        <p className="font-source-sans mt-2">{children}</p>
      </div>
    </>
  )
}