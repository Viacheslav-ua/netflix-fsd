import { UiBgMain } from '@/shared/ui/ui-bg-main'
import { Header } from '@/features/header'

export const HomePage = () => {
  return (
    <UiBgMain>
      <Header />
      <div className='min-h-screen flex flex-col justify-center items-center  px-5 text-center gap-10'>
        <h1 className='font-extrabold text-white text-[48px]'>Home Page</h1>
        
      </div>
    </UiBgMain>
  )
}