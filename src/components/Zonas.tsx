import Sauna from '/sauna.webp'

export function Zonas () {
  return (
    <section className='mb-24'>
      <h1 className='text-h1 text-center text-bodyText mt-16'>Nuestras instalaciones</h1>
      <article className='w-3/4 flex flex-col my-0 mx-auto mt-12'>
        <div className='mb-16'>
          <h3 className='text-h3 text-bodyText'>Equipo de primera</h3>
          <picture>
            <img src='' alt='image' />
          </picture>
          <p className='text-bodyText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque soluta repellat enim! Voluptas, voluptates sequi. Molestiae, alias reprehenderit voluptatem possimus obcaecati, mollitia voluptates reiciendis in perferendis voluptate distinctio repellendus blanditiis!</p>
        </div>

        <div className='mb-16'>
          <h3 className='text-h3 text-bodyText'>Piscina climatizada</h3>
          <picture>
            <img src='' alt='image' />
          </picture>
          <p className='text-bodyText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, facere. Officia illum non maxime earum hic, laboriosam nemo facilis? Consequuntur at qui nostrum eligendi optio illum magnam dolor accusantium sapiente.</p>
        </div>

        <div>
          <h3 className='text-h3 text-bodyText'>Sauna</h3>
          <div className='w-full flex'>
            <picture className='mr-9'>
              <img className='w-[600px]' src={Sauna} alt='image' />
            </picture>
            <p className='text-bodyText w-1/2 content-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est magnam, ut aliquam voluptates iusto numquam suscipit excepturi, repellendus adipisci aspernatur nostrum error nihil debitis deserunt vero rem natus doloribus.</p>
          </div>
        </div>
      </article>
    </section>
  )
}