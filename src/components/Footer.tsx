import { FacebookIcon } from '../icons/Facebook'
import { InstagramIcon } from '../icons/Instagram'
import { WhatsappIcon } from '../icons/Whatsapp'

export function Footer () {
  return (
    <footer className='w-full p-4 bg-[#8F90B5] mt-auto'>
      <div className='flex justify-between px-2'>
        <span className='content-center text-lg'>Gym</span>
        <span className='content-center text-lg'>Volver al inicio</span>

        <div className='flex'>
          <a className='pl-2 pr-2' href='#'>
            <i><FacebookIcon /></i>
          </a>
          <a className='pl-2 pr-2 mx-2' href='#'>
            <i><InstagramIcon /></i>
          </a>
          <a className='pl-2 pr-2' href='#'>
            <i><WhatsappIcon /></i>
          </a>
        </div>

      </div>
    </footer>
  )
}
