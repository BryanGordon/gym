import { BarbellIcon } from '../icons/barbell'
import { ClockIcon } from '../icons/Clock'
import { PersonIcon } from '../icons/Person'
import { SaladIcon } from '../icons/Salad'
import Exercie from "/exercie-draw.png"
import Salad from '/salad.png'
import Trainer from '/trainer.png'
import Time from '/free-time.png'

export function Habilities () {
  // Tamaño de la font en el vento de 18px (Titulo)
  return (
    <section className='mb-24'>
      <h1 className='text-bodyText text-center mb-10'>Mejora con nosotros</h1>
      <article className='w-3/4 h-[600px] my-0 mx-auto grid grid-cols-2 grid-rows-3 gap-5'>

        <div className='col-span-1 row-span-2 bg-orange-500  '>
          <div className='pl-5 pt-2 flex text-center'>
            <BarbellIcon />
            <span className='ml-5'>Ejercicios pensados para tus necesidades</span>
          </div>

          <div className='h-full'>
            <picture className='flex flex-col h-3/4 justify-start place-items-center pt-10'>
              <img className='w-96 h-52' src={Exercie} alt='imagen' />
            </picture>
            <p className='px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fugit doloribus dolor voluptatum porro at?</p>
          </div>
        </div>

        <div className='col-span-1 row-span-1 bg-green-400 overflow-hidden'>
          <div className='pl-5 pt-2 flex text-center'>
            <SaladIcon />
            <span className='ml-5'>Dietas aliementicias a medida</span>
          </div>

          <div className='flex'>
            <p className='w-3/4 pt-10 px-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae adipisci, nesciunt a odit cumque exercitationem.</p>
            <picture className='w-1/2'>
              <img src={Salad} alt='imagen' />
            </picture>
          </div>
        </div>
        <div className='col-span-1 row-span-1 bg-indigo-400'>
          <div className='pl-5 pt-2 flex text-center'>
            <PersonIcon />
            <span className='ml-5'>Entrenadores personales a tu disposicion</span>
          </div>
          <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, non vel amet illum maiores autem!</p>
          </div>
        </div>
        <div className='col-span-2 row-span-1 bg-rose-400'>
          <div className='pl-5 pt-2 flex text-center'>
            <ClockIcon />
            <span className='ml-5'>Horario flexibles. Ajustalo como quieras!!!</span>
            <picture>
              <img src={Time} alt='imagen' />
            </picture>
          </div>
        </div>
      </article>
    </section>
  )
}
