import NotFoundImage from '../assets/404-image.jpg'

export function Page404 () {
  return (
    <section className='w-3/4 my-0 mx-auto mt-10 text-center'>
      <span className='text-h1 text-white'>La pagina no existe</span>
      <div className='my-20 '>
        <img className='rounded-lg my-0 mx-auto' src={NotFoundImage} alt='image' />
      </div>
    </section>
  )
}
