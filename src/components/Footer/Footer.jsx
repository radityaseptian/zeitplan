import Download from './Download'
import logo from '../../assets/image/logo.png'
import FootList from './FootList'
import twitter from '../../assets/image/twitter.png'
import facebook from '../../assets/image/facebook.png'
import instagram from '../../assets/image/instagram.png'

export default function Footer() {
  return (
    <>
      <Download />
      <div className='container mx-auto max-w-6xl'>
        <hr className='w-full text-[#0e144a0e] h-[1px]'></hr>
        <footer>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:gap-10 p-4 md:p-2 lg:p-0 py-10 md:py-16 lg:py-20'>
            <div>
              <img src={logo} />
              <div className='py-2 lg:py-4 font-patua'>Zeitplan</div>
              <p className='text-[#0e144a9f] text-sm lg:text-base leading-6'>
                Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah,
                jadwal mabar, jadwal makan, jadwal liga inggris, dan
                jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami
                sudah berusaha semaksimal mungkin.
              </p>
              <div className='text-[#0e144a9f] text-sm py-3'>
                COPYRIGHT (C) 2021. DESIGN BY NAUVAL
              </div>
            </div>
            <div className='flex justify-around lg:justify-between my-4 md:my-0'>
              <ul className='space-y-1'>
                <li className='font-patua'>Sitemap</li>
                <FootList>Beranda</FootList>
                <FootList>Fitur-fitur</FootList>
                <FootList>Harga</FootList>
                <FootList>Testimoni</FootList>
                <FootList>Download</FootList>
              </ul>
              <ul className='space-y-1'>
                <li className='font-patua'>Partner</li>
                <FootList>Sefan.ru</FootList>
                <FootList>Ganool</FootList>
                <FootList>Stafaband</FootList>
                <FootList>MyWapBlog</FootList>
                <FootList>Friv</FootList>
              </ul>
            </div>
            <div className='mt-3 md:mt-0 lg:pl-20'>
              <span className='py-2 lg:py-4 font-patua'>Tetap Terhubung</span>
              <p className='text-[#0e144a9f] text-sm lg:text-base leading-6 py-3'>
                Lihat kami pansos di sosial media berikut:
              </p>
              <div className='flex gap-2 lg:gap-3'>
                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                  <img src={instagram} />
                </a>
                <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                  <img src={facebook} />
                </a>
                <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                  <img src={twitter} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
