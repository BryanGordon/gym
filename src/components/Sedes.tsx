import GymView from '../assets/outside-left-view.webp'
import GymView2 from '../assets/outside-right-view.webp'

export function Sedes () {
  return (
    <section className='mb-24'>
      <header>
        <h1 className='text-bodyText text-h1 mt-16 text-center'>Nuestras sedes</h1>
      </header>
      <article className='mt-10'>

        <div className='w-3/4 flex flex-col my-0 mx-auto'>
          <h3 className='text-bodyText text-h3 mb-8'>Ibarra</h3>
          <picture>
            <img className='w-[1250px] min-w-48 h-[580px] rounded-lg' src={GymView} alt='image' />
          </picture>
          <p className='text-bodyText text-center py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ipsa!</p>
        </div>

        <div className='w-3/4 flex flex-col my-0 mx-auto'>
          <h3 className='text-bodyText text-h3 mb-8'>Quito</h3>
          <picture>
            <img className='w-[1250px] min-w-48 h-[580px] rounded-lg' src={GymView2} alt='image' />
          </picture>
          <p className='text-bodyText text-center py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore.</p>
        </div>

        <div className='w-3/4 my-0 mx-auto'>
          <h3 className='text-bodyText text-h3 mt-10 text-center'>Contactos</h3>
          <div className='flex justify-around mt-14'>
            <ul className='text-bodyText *:py-3'>
              <li>Otro</li>
              <li>Otro</li>
              <li>Otro</li>
            </ul>

            <ul className='text-bodyText *:py-3'>
              <li>Otro</li>
              <li>Otro</li>
              <li>Otro</li>
            </ul>

            <ul className='text-bodyText *:py-3'>
              <li>Otro</li>
              <li>Otro</li>
              <li>Otro</li>
            </ul>
          </div>
        </div>

      </article>
    </section>
  )
}
