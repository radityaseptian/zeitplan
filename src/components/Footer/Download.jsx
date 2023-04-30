import appStore from '../../assets/image/appstore.png'
import playStore from '../../assets/image/playstore.png'

export default function Download() {
  return (
    <>
      <div className='container mx-auto max-w-6xl'>
        <div className='w-[80%] sm:w-1/2 mx-auto py-12 md:py-16 lg:py-20'>
          <center>
            <h2 className='font-patua text-[#0E144A] leading-7 text-xl md:text-2xl lg:text-3xl lg:leading-10'>
              Download Aplikasi Keren Ini Sekarang!
            </h2>
            <p className='text-[#0e144a9f] text-sm lg:text-base leading-6 mt-3 lg:mt-4'>
              Please download lah aplikasi ini,udah susah-susah buat,mana pas
              bikin sampe begadang,terus juga ditambah weekend.Jadi,please
              download lah ya.
            </p>
            <div className='flex justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-6 md:mt-7 lg:mt-9'>
              <img src={playStore} />
              <img src={appStore} />
            </div>
          </center>
        </div>
      </div>
    </>
  )
}
