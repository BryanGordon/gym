export function About () {
  return (
    <section className='mb-24'>
      <h1 className='text-center text-h1 mt-16 text-bodyText '>Sobre Nosotros</h1>
      <article className='mt-10 '>
        <picture className='w-full mb-10'>
          <img className='w-[1250px] min-w-48 h-[580px] my-0 mx-auto rounded-md' src='gimnasio.jpeg' alt='imagen' />
        </picture>
        <div className='w-3/4 my-0 mx-auto pt-14'>
          <p className='text-center text-base text-bodyText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro, magni voluptatum ullam at consequatur in amet velit eius reiciendis eveniet quia odit suscipit sunt perspiciatis libero incidunt. Natus voluptatem nostrum nesciunt ipsam fugit illo quod magnam odio. Hic, nesciunt!</p>
        </div>
      </article>
    </section>
  )
}
