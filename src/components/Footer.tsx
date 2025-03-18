import { FacebookIcon } from '../icons/Facebook'
import { InstagramIcon } from '../icons/Instagram'
import { WhatsappIcon } from '../icons/Whatsapp'

export function Footer () {
  return (
    <footer className='w-full p-6 mt-auto bg-gradient-to-b from-[#000034] via-[#3B0050] to-[#620089]'>
      <div className='flex justify-between px-2'>
        <span className='content-center text-navText'>Gym</span>
        <span className='content-center text-navText footer-text transition ease-in-out duration-200 max-[630px]:hidden'>
          <a className='hover:text-[#dabef4ea] transition ease-in-out duration-200' href='#top'>
            Volver al inicio
          </a>
        </span>

        <div className='flex'>
          <a className='pl-2 pr-2 hover:scale-125 transition ease-in-out duration-200' href='#'>
            <i><FacebookIcon /></i>
          </a>
          <a className='pl-2 pr-2 mx-2 hover:scale-125 transition ease-in-out duration-200' href='#'>
            <i><InstagramIcon /></i>
          </a>
          <a className='pl-2 pr-2 hover:scale-125 transition ease-in-out duration-200' href='#'>
            <i><WhatsappIcon /></i>
          </a>
        </div>

      </div>
    </footer>
  )
}
