import Exercise from '../assets/ejercicio.webp'
import Training from '../assets/entrenamiento.webp'
import Material from '../assets/gym-material.webp'
import Trainer from '../assets/trainer.webp'

export function Collage () {
  return (
    <section className='mb-24'>
      <article className='text-bodyText w-3/4 my-0 mx-auto grid grid-cols-2 gap-5'>
        <img className='rounded-md w-full h-[440px]' src={Exercise} alt='People doing exercise' />
        <img className='rounded-md w-full h-[440px]' src={Training} alt='Gym with people training' />
        <img className='rounded-md w-full h-[440px]' src={Material} alt='Gym material' />
        <img className='rounded-md w-full h-[440px]' src={Trainer} alt='Trainer' />
      </article>
    </section>
  )
}
