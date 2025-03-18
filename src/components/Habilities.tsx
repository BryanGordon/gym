import { BarbellIcon } from '../icons/Barbell'
import { ClockIcon } from '../icons/Clock'
import { PersonIcon } from '../icons/Person'
import { SaladIcon } from '../icons/Salad'
import Exercise from '../assets/exercie-draw.webp'
import Salad from '../assets/salad.webp'
import Muscle from '../assets/muscle.webp'
import Time from '../assets/free-time.webp'

export function Habilities () {
  return (
    <section className='mb-24'>
      <header>
        <h1 className='text-bodyText text-h1 text-center mb-10'>Mejora con nosotros</h1>
      </header>
      <article className='w-3/4 h-[600px] my-0 mx-auto grid grid-cols-2 grid-rows-3 gap-2 max-[1460px]:grid-rows-2 max-[1130px]:grid-cols-1 max-[1130px]:grid-rows-4 max-[720px]:grid-rows-8 max-[400px]:h-[685px]'>

        <div className='col-span-1 row-span-2 bg-orange-500/60 rounded-xl max-[1460px]:row-span-1 max-[1130px]:overflow-hidden max-[720px]:row-span-2 max-[720px]:content-center'>
          <div className='pl-5 pt-4 flex max-[720px]:pt-0 max-[450px]:justify-center max-[450px]:content-center max-[450px]:flex-wrap max-[450px]:pl-0'>
            <BarbellIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText max-[400px]:ml-2'>Ejercicios pensados para tus necesidades</span>
          </div>

          <div className='max-[1460px]:flex max-[1460px]:items-center'>
            <picture className='flex flex-col h-3/4 justify-start place-items-center pt-10 mb-9 max-[1130px]:pt-0 max-[1130px]:mb-0 max-[720px]:hidden'>
              <img className='w-96 h-52 max-[1460px]:w-80 max-[1460px]:h-28' src={Exercise} alt='imagen' />
            </picture>
            <p className='px-6 font-normal text-bentoParag max-[720px]:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?</p>
          </div>
        </div>

        <div className='col-span-1 row-span-1 bg-green-400/65 rounded-xl overflow-hidden max-[720px]:row-span-2 max-[720px]:content-center'>
          <div className='pl-5 pt-4 flex max-[720px]:pt-0 max-[450px]:flex-wrap max-[450px]:content-center max-[450px]:justify-center max-[450px]:pl-0'>
            <SaladIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText max-[400px]:ml-2'>Dietas aliementicias a medida</span>
          </div>

          <div className='flex'>
            <p className='w-3/4 pt-10 px-6 font-normal text-bentoParag max-[1130px]:pt-4 max-[720px]:hidden'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae adipisci, nesciunt a odit cumque exercitationem.</p>
            <picture className='max-[1130px]:w-[25%] max-[720px]:hidden'>
              <img src={Salad} alt='imagen' />
            </picture>
          </div>
        </div>

        <div className='col-span-1 row-span-1 bg-indigo-400/60 rounded-xl max-[1130px]:overflow-hidden max-[720px]:row-span-2 max-[720px]:content-center'>
          <div className='pl-5 pt-4 flex max-[720px]:pt-0 max-[450px]:flex-wrap max-[450px]:justify-center max-[450px]:content-center max-[450px]:pl-0'>
            <PersonIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText max-[400px]:ml-2'>Entrenadores personales a tu disposicion</span>
          </div>

          <div className='flex'>
            <p className='w-3/5 pt-10 px-6 font-normal text-bentoParag max-[1130px]:pt-4 max-[1130px]:w-3/4 max-[720px]:hidden'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, non vel amet illum maiores autem!</p>
            <picture className='w-1/4 ml-20 max-[1460px]:ml-10 max-[720px]:hidden'>
              <img className='pb-5 max-h-[150px] max-[1460px]:pt-5 max-[1130px]:pt-0' src={Muscle} alt='image' />
            </picture>
          </div>
        </div>

        <div className='col-span-2 row-span-1 bg-rose-400/55 rounded-xl overflow-hidden max-[1460px]:col-span-1 max-[720px]:row-span-2 max-[720px]:content-center'>
          <div className='pl-5 pt-4 flex max-[720px]:pt-0 max-[450px]:flex-wrap max-[450px]:justify-center max-[450px]:content-center max-[450px]:pl-0'>
            <ClockIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText max-[400px]:ml-2'>Horario flexibles. Ajustalo como quieras!!!</span>
          </div>

          <div className='flex'>
            <p className='w-3/4 pt-10 px-6 font-normal text-bentoParag max-[1130px]:pt-4 max-[720px]:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita fuga nulla, consequatur nisi officiis. Fugiat, rerum sed? Magnam, expedita.</p>
            <picture className='max-[720px]:hidden'>
              <img src={Time} alt='image' className='max-[1460px]:w-[90%] max-[1460px]:mt-5' />
            </picture>
          </div>
        </div>

      </article>
    </section>
  )
}
