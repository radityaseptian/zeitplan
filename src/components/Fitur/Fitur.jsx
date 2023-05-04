/* eslint-disable react/no-unescaped-entities */
import fitur from '../../assets/image/imgFitur/fitur.png'
import cloud from '../../assets/image/imgFitur/cloud.png'
import video from '../../assets/image/imgFitur/video.png'
import trash from '../../assets/image/imgFitur/trash.png'
import bell from '../../assets/image/imgFitur/bell.png'
import CardFitur from './CardFitur'

export default function Fitur() {
  return (
    <>
      <div id='fitur' className='container mx-auto max-w-6xl'>
        <div className='px-4 md:px-2 md:flex'>
          <div className='md:w-1/2'>
            <img src={fitur} className='min-w-full md:pr-4 lg:pr-10' />
          </div>
          <div className='md:w-1/2 md:mt-4 lg:mt-14'>
            <h2 className='font-patua text-[#0E144A] leading-7 text-xl md:text-2xl lg:text-3xl lg:leading-10'>
              Memangnya ada fitur apa aja sih di aplikasi yang katanya keren
              ini? Jadi penasaran nich~
            </h2>
            <p className='text-[#0e144a9f] text-sm lg:text-base leading-6 mt-3'>
              Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!).Lagian lo kuliah tapi jarang masuk,titip absen doang!
            </p>
            <div className='md:grid md:grid-cols-2 md:gap-3 lg:gap-7 md:mt-4 lg:mt-8'>
              <CardFitur  img={cloud} title='Tidak Tersimpan Otomatis'>Kalo lo pelupa ya udah dah,jadwal lo bakal gak kesimpen tuh.</CardFitur>
              <CardFitur img={video} title='Si Rizal Gak Pernah Ngonten'>Emang sih dia gak pernah ngonten,do'ain ya biar mau ngonten.</CardFitur>
              <CardFitur img={trash} title='Terhapus Otomatis'>Data lo bakal kehapus otomatis tiap hari,biar hemat server kita</CardFitur>
              <CardFitur img={bell} title='Nggak Tau Lagi Gw'>Mikir teks buat konten susah bro,ini aja ngasal masih susah!</CardFitur>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
