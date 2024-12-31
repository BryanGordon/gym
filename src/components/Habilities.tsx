import { BarbellIcon } from '../icons/barbell'
import { SaladIcon } from '../icons/Salad'

export function Habilities () {
  // Tamaño de la font en el vento de 18px (Titulo)
  return (
    <section className='mb-24'>
      <h1 className='text-bodyText text-center mb-10'>Mejora con nosotros</h1>
      <article className='w-3/4 h-[600px] my-0 mx-auto grid grid-cols-2 grid-rows-3 gap-5'>

        <div className='col-span-1 row-span-2 bg-pink-400'>
          <div className='pl-5 pt-2 flex text-center'>
            <BarbellIcon />
            <span className='ml-5'>Bento de habilidades que se van a mejorar</span>
          </div>
        </div>
        <div className='col-span-1 row-span-1 bg-red-500'>
          <div className='pl-5 pt-2 flex text-center'>
            <SaladIcon />
            <span className='ml-5'>Bento de habilidades que se van a mejorar</span>
          </div>
        </div>
        <div className='col-span-1 row-span-1 bg-blue-400'>
          <div className='pl-5 pt-2 flex text-center'>
            <BarbellIcon />
            <span className='ml-5'>Bento de habilidades que se van a mejorar</span>
          </div>
        </div>
        <div className='col-span-2 row-span-1 bg-purple-500'>
          <div className='pl-5 pt-2 flex text-center'>
            <BarbellIcon />
            <span className='ml-5'>Bento de habilidades que se van a mejorar</span>
          </div>
        </div>
      </article>
    </section>
  )
}
