import { UiBgMain } from '@/shared/ui/ui-bg-main'
import { UiHeader } from '@/shared/ui/ui-header'
import Image from 'next/image'
// import { BgProvider } from './components/BgProvider'
// import Navbar from './components/Navbar'

const LandingPage = () => {
  return (
    <UiBgMain>
      <UiHeader />
      <div className='min-h-screen flex flex-col justify-center items-center  px-5 text-center gap-10'>
        <h1 className='font-extrabold text-white text-[48px]'>Фільми серіали й інший контент без обмежань</h1>
        <h4 className='font-semibold text-white text-[36px]'>Дивіться будь де. Скасувати підписку можна будь-коли</h4>
      </div>
    </UiBgMain>
  )
}

export default LandingPage