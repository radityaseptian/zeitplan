import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {
  return (
    <div id='home' className='antialiased bg-[#fff4f263] bg-gradient-to-t from-[#fff0ee] pt-24 pb-12 md:mt-10 lg:mt-12'>
      <Navbar />
      <Hero />
    </div>
  )
}
