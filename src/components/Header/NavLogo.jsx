import logo from '../../assets/image/logo.png'

export default function NavLogo() {
  return (
    <>
      <div className="flex items-center gap-1 md:gap-2 lg:gap-[.875rem]">
        <img src={logo} alt='Logo' />
        <h1 className='font-poppins font-semibold text-xl md:text-[1.125rem]'>Zeitplan</h1>
      </div>
    </>
  )
}
