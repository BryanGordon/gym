import { useRef } from 'react'
import Exercise from '../assets/ejercicio.webp'
import Training from '../assets/entrenamiento.webp'
import Material from '../assets/gym-material.webp'
import Trainer from '../assets/trainer.webp'
import { motion, useInView } from 'framer-motion'

export function Collage () {
  const ref = useRef(null)
  const isOnView = useInView(ref, { once: true })

  return (
    <section className='mb-24'>
      <article className='text-bodyText w-3/4 my-0 mx-auto grid lg:grid-cols-2 gap-5 sm:grid-cols-1'>
        <motion.img
          className='rounded-md w-full h-[440px]'
          src={Exercise} alt='People doing exercise'
          ref={ref}
          initial={{ opacity: 0.4, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 0.5 }}
          animate={isOnView ? { opacity: 1, scale: 1, filter: 'blur(0)' } : {}}
        />
        <motion.img
          className='rounded-md w-full h-[440px]'
          src={Training}
          alt='Gym with people training'
          ref={ref}
          initial={{ opacity: 0.4, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={isOnView ? { opacity: 1, scale: 1, filter: 'blur(0)' } : {}}
        />
        <motion.img
          className='rounded-md w-full h-[440px]'
          src={Material}
          alt='Gym material'
          ref={ref}
          initial={{ opacity: 0.4, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          animate={isOnView ? { opacity: 1, scale: 1, filter: 'blur(0)' } : {}}
        />
        <motion.img
          className='rounded-md w-full h-[440px]'
          src={Trainer}
          alt='Trainer'
          ref={ref}
          initial={{ opacity: 0.4, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          animate={isOnView ? { opacity: 1, scale: 1, filter: 'blur(0)' } : {}}
        />
      </article>
    </section>
  )
}
