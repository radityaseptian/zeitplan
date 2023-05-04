import CardReview from '../CardReview'
import sanusi from '../../assets/image/profil/sanusi.png'
import indah from '../../assets/image/profil/indah.png'
import wahyu from '../../assets/image/profil/wahyu.png'
import jumadi from '../../assets/image/profil/jumadi.png'
import scarlet from '../../assets/image/profil/scarlet.png'
import megalodon from '../../assets/image/profil/megalodon.png'

export default function Ulasan() {
  return (
    <div className='bg-[#fe5d441e]'>
      <div
        id='testimoni'
        className='container mx-auto max-w-6xl py-10 lg:py-24'
      >
        <div className='w-[80%] sm:w-1/2 lg:w-[38%] mx-auto'>
          <center className='pb-6 lg:pb-24'>
            <h2 className='font-patua text-[#0E144A] leading-7 text-xl md:text-2xl lg:text-3xl lg:leading-10'>
              Apa kata umat manusia tentang aplikasi keren ini?
            </h2>
            <p className='text-[#0e144a9f] text-sm lg:text-base leading-6 mt-3 lg:mt-4'>
              Kami tidak memfilter semua review,males soalnya.Jadi semua yang
              ditampilkan disini semuanya asli tanpa rekayasa.
            </p>
          </center>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:items-start p-4 md:p-2 lg:p-0 gap-2 sm:gap-3 md:gap-4'>
          <CardReview
            name='Sanusi Sulivan'
            value={5}
            status='Dosen di Boating School Ny.Puff'
            image={sanusi}
          >
            Terima kasih untuk aplikasinya,karena aplikasi ini murid-murid saya
            jadi rajin kuliah walaupun nggk ada adab.Adab tidak perlu kuliah
            nomor satu!👈😎👉
          </CardReview>
          <CardReview
            name='Wahyu Hayuk'
            value={1}
            status='Mahasiswa Abadi'
            image={wahyu}
          >
            Gara-gara aplikasi ini aku tidak bisa bolos kuliah,padahal
            cita-citaku ingin bolos kuliah dan menitipkan absen saja.Huft.
          </CardReview>
          <CardReview
            name='Ibu Scarlet Darkening'
            value={5}
            status='Ibunya Wahyu Hayuk'
            image={scarlet}
          >
            Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin
            kuliah walaupun tidak menjadi pandai.Terima kasih Papa Zola!
          </CardReview>
          <CardReview
            name='Indah Cyank Dya CImax'
            value={3}
            status='Works at Looking For True Love,Inc'
            image={indah}
          >
            Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin
            tLonk dnkbntU instlA d hp qu,aq mw pKe apkx
          </CardReview>
          <CardReview
            name='Jumadi RT.03'
            value={1}
            status='Ketua RT.06'
            image={jumadi}
          >
            Pengiriman cepat,,,seller ramah,,packing juga rapih,tapi barangnya
            belum dicoba...saya kasih bintang satu dulu,,,nanti udah dicoba saya
            kasih bintang dua,,,nanti kalo udah peterpen jadi bintang di
            surga...xixixixi...😀😀😀😀😀
          </CardReview>
          <CardReview
            name='Cucunya Megalodon'
            value={5}
            status='Pecinta Kucing Hungaria'
            image={megalodon}
          >
            aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual
            Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva
            Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom
            get contact apple music amazon prime resso iflix Microsoft 365 HBO
            GO zoom.
          </CardReview>
        </div>
      </div>
    </div>
  )
}
