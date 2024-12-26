export function About () {
  return (
    <section>
      <h1 className='text-center text-lg mt-16 text-bodyText '>Sobre Nosotros</h1>
      <article className='mt-10 '>
        <picture className='w-full mb-10'>
          <img className='w-96 min-w-48 h-96 my-0 mx-auto' src='gimnasio.jpeg' alt='imagen' />
        </picture>
        <div className='w-3/4 my-0 mx-auto'>
          <p className='text-center text-base text-bodyText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro, magni voluptatum ullam at consequatur in amet velit eius reiciendis eveniet quia odit suscipit sunt perspiciatis libero incidunt. Natus voluptatem nostrum nesciunt ipsam fugit illo quod magnam odio. Hic, nesciunt!</p>
        </div>
      </article>
    </section>
  )
}
