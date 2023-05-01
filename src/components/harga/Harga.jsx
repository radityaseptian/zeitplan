import CardHarga from './CardHarga'
import ListBenefit from './ListBenefit'

export default function Harga() {
  return (
    <>
      <div className='bg-[#fe5d4413] bg-gradient-to-t from-[#ffffff69]'>
        <div id='harga' className='container mx-auto max-w-6xl px-2 lg:px-0'>
          <div className='text-center py-12 md:py-16 lg:py-20'>
            <center className='w-[80%] sm:w-1/2 lg:w-[38%] mx-auto'>
              <h2 className='font-patua text-[#0E144A] leading-7 text-xl md:text-2xl lg:text-3xl lg:leading-10'>
                Main catur sambil bersepeda, beda harga beda fitur
              </h2>
              <p className='text-[#0e144a9f] text-sm lg:text-base leading-6 mt-3 lg:mt-4'>
                Aplikasi ini gratis sebenernya,brodie.Tapi kalo mau bayar gapapa
                juga sih, untuk gantinya kami kasih fitur yang spesial buat
                kamu!
              </p>
            </center>
          </div>
          <div className='grid justify-center lg:gap-2 sm:grid-cols-2 md:grid-cols-3'>
            <CardHarga
              status='RINDURATU'
              konten='Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.'
              harga='Free'
            >
              <ListBenefit>Jadwal Tak Terbatas</ListBenefit>
              <ListBenefit>Fitur Notifikasi (Kadang Telat)</ListBenefit>
              <ListBenefit>Mode Gelap</ListBenefit>
              <ListBenefit>Bisa Topup Pulsa</ListBenefit>
              <ListBenefit>Bisa Beli Token Listrik</ListBenefit>
              <ListBenefit>Data Lo Dijual</ListBenefit>
            </CardHarga>
            <CardHarga
              status='SULTAN'
              konten='Sama aja data lo juga tetap dijual, tapi lo dapet fitur yang lain.'
              harga='100K'
            >
              <ListBenefit>Semua Fitur Sebelumnya</ListBenefit>
              <ListBenefit>Diingetin Makan</ListBenefit>
              <ListBenefit>Sleep Call Sampe Bobo</ListBenefit>
              <ListBenefit>Ditemenin Jalan Tiap Minggu</ListBenefit>
              <ListBenefit>Ditemenin Nonton Eksekswan</ListBenefit>
              <ListBenefit>Terhindar Razia Rambut</ListBenefit>
              <ListBenefit>Dapet Izin Bikin Ormas</ListBenefit>
            </CardHarga>
            <CardHarga
              status='RAFATAR'
              konten='Ini juga sama aja,data lo dijual juga. Tapi fitur-fiturnya lebih ok.'
              harga='Rp 10000K'
            >
              <ListBenefit>Semua Fitur Sebelumnya</ListBenefit>
              <ListBenefit>Dibayarin Kuliah 4 Semester</ListBenefit>
              <ListBenefit>Dibayarin Cicilan Motor</ListBenefit>
              <ListBenefit>Dicicilin KPR 12 Tahun</ListBenefit>
              <ListBenefit>Magang di NASA Cab.Depok</ListBenefit>
              <ListBenefit>Dapet Skin Alok</ListBenefit>
              <ListBenefit>Nonton Film Gratis di Ganool</ListBenefit>
              <ListBenefit>Naik Haji Bila Mampu</ListBenefit>
            </CardHarga>
          </div>
          <div className='md:flex justify-center'>
            <p className='text-[#0e144a9f] md:w-1/2 text-center p-5 text-sm lg:text-base leading-6 py-12'>
              <span className='text-[#0E144A]'>Harap Diingat: </span>Harga
              diatas belum termasuk KKM,dan harga sewaktu-waktu bisa berubah
              secara mendadak seperti pengumuman PPKM darurat.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
