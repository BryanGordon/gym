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
      <article className='w-3/4 h-[600px] my-0 mx-auto grid grid-cols-2 grid-rows-3 gap-2 bento-responsive-container'>

        <div className='col-span-1 row-span-2 bg-orange-500/60 rounded-xl'>
          <div className='pl-5 pt-4 flex'>
            <BarbellIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText'>Ejercicios pensados para tus necesidades</span>
          </div>

          <div>
            <picture className='flex flex-col h-3/4 justify-start place-items-center pt-10 mb-9'>
              <img className='w-96 h-52' src={Exercise} alt='imagen' />
            </picture>
            <p className='px-6 font-normal text-bentoParag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?</p>
          </div>
        </div>

        <div className='col-span-1 row-span-1 bg-green-400/65 rounded-xl overflow-hidden'>
          <div className='pl-5 pt-4 flex'>
            <SaladIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText'>Dietas aliementicias a medida</span>
          </div>

          <div className='flex'>
            <p className='w-3/4 pt-10 px-6 font-normal text-bentoParag'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae adipisci, nesciunt a odit cumque exercitationem.</p>
            <picture>
              <img src={Salad} alt='imagen' />
            </picture>
          </div>
        </div>

        <div className='col-span-1 row-span-1 bg-indigo-400/60 rounded-xl'>
          <div className='pl-5 pt-4 flex'>
            <PersonIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText'>Entrenadores personales a tu disposicion</span>
          </div>

          <div className='flex'>
            <p className='w-3/5 pt-10 px-6 font-normal text-bentoParag'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, non vel amet illum maiores autem!</p>
            <picture className='w-1/4 ml-20'>
              <img className='pb-5 max-h-[150px]' src={Muscle} alt='image' />
            </picture>
          </div>
        </div>

        <div className='col-span-2 row-span-1 bg-rose-400/55 rounded-xl overflow-hidden'>
          <div className='pl-5 pt-4 flex'>
            <ClockIcon />
            <span className='ml-5 text-bentoTitle font-medium text-bentoText'>Horario flexibles. Ajustalo como quieras!!!</span>
          </div>

          <div className='flex'>
            <p className='w-3/4 pt-10 px-6 font-normal text-bentoParag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita fuga nulla, consequatur nisi officiis. Fugiat, rerum sed? Magnam, expedita.</p>
            <picture>
              <img src={Time} alt='image' />
            </picture>
          </div>
        </div>

      </article>
    </section>
  )
}
