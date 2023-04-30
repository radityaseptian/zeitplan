import HeroButton from './HeroButton'
import heroImage from '../../assets/image/hero-image.png'
import CardReview from '../CardReview'

export default function Hero() {
  return (
    <>
      <div className='container mx-auto mt-8 lg:mt-10 max-w-6xl'>
        <div className='px-4 md:px-2 md:flex'>
          <div className='md:w-5/12 md:pr-2'>
            <div className='pr-8 md:pr-0'>
              <h1 className='font-patua font text-2xl md:text-3xl lg:text-4xl lg:leading-[3.75rem] md:leading-8 lg:pr-20 text-[#0E144A]'>
                Sebuah Cara Mudah Untuk Mengatur Jadwal Kuliah Kamu
              </h1>
              <p className='text-[#6F6F6F] lg:mt-4 lg:mb-8 mt-2 mb-6 text-base md:text-[1.125rem] md:leading-[2.125rem]'>
                Datang kuliah terlambat karena ketiduran itu tidak masalah;
                datang kuliah karena lupa jadwal itu sangatlah tidak keren.
                Aplikasi ini adalah sahabat kamu sekarang, brodie~
              </p>
            </div>
            <HeroButton />
            <CardReview
              value={3}
              name={'P-Star 7'}
              status={'Dosen di bikini bottom'}
              slider={true}
              shadow='shadow-[#fe5d442a]'
            >
              Aplikasi sialan,ini gw jadi kagak bisa alesan lagi buat bolos
              kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin
              kuliah, terima kasih garena!
            </CardReview>
          </div>
          <div className='grid place-content-center overflow-hidden md:w-7/12 p-2 md:p-0 mt-4 md:mt-0'>
            <img
              src={heroImage}
              className=' sm:px-0 lg:p-5'
            />
          </div>
        </div>
      </div>
    </>
  )
}
