import imgPromosi1 from '../../assets/image/imgPromosi/database.png'
import imgPromosi2 from '../../assets/image/imgPromosi/wifi.png'
import imgPromosi3 from '../../assets/image/imgPromosi/user.png'
import imgPromosi4 from '../../assets/image/imgPromosi/code.png'
import CardPromosi from './CardPromosi'

export default function Promosi() {
  return (
    <>
      <div className='container mx-auto max-w-6xl'>
        <div className='px-4 md:px-2 py-4 lg:py-24 md:flex md:items-center'>
          <div className='lg:w-5/12 lg:pr-32'>
            <h2 className='font-patua text-[#0E144A] leading-7 text-xl md:text-2xl lg:text-3xl lg:leading-10'>
              Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
            </h2>
            <p className='text-[#0e144a9f] text-sm lg:text-base leading-6 mt-3'>
              Sejujurnya aplikasi kita ini seringkali bermasalah,Kadang-kadang
              gak bisa submit data,kadang dibukanya lambat,kadang tiba-tiba
              logout sendir,untung gak berdua.
            </p>
            <div className='flex justify-between mt-8 mr-8'>
              <div>
                <span className='text-[#0e144a9f] text-xs'>TOTAL DOWNLOAD</span>
                <h6 className='text-[#0E144A] font-source-sans font-semibold'>
                  1,501,234
                </h6>
              </div>
              <div>
                <span className='text-[#0e144a9f] text-xs'>TOTAL USERS</span>
                <h6 className='text-[#0E144A] font-source-sans font-semibold'>
                  1,318,829
                </h6>
              </div>
            </div>
          </div>
          <div className='lg:w-7/12 grid sm:grid-cols-2 gap-2 lg:gap-[1.875rem] mt-6 md:mt-0 md:ml-2'>
            <CardPromosi img={imgPromosi1} title='Aplikasi Gratis'>
              Semua fitur di aplikasi ini adalah gratis,tapi data privasi kamu
              akan kami jual ke agen khusus US.
            </CardPromosi>
            <CardPromosi img={imgPromosi2} title='Kode OTP Error'>
              Pas login kode OTP gak kekirim kadang,terus lo harus nyoba
              berulang kali sampe bisa.
            </CardPromosi>
            <CardPromosi img={imgPromosi3} title='Data Tidak Aman'>
              Data tidak disimpan dengan baik dan rentan bocor,jangan heran data
              lo tiba-tiba ada di deepweb.
            </CardPromosi>
            <CardPromosi img={imgPromosi4} title='Biasanya Error'>
              Ketika submit data biasanya error di bagian ajax-nya,eh nggak deng
              itu aplikasi pemerintah~
            </CardPromosi>
          </div>
        </div>
      </div>
    </>
  )
}
