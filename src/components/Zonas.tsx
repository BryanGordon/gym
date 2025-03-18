import Sauna from '../assets/sauna.webp'
import Material from '../assets/gym-material.webp'
import Piscina from '../assets/piscina.webp'

export function Zonas () {
  return (
    <section className='mb-24'>
      <h1 className='text-h1 text-center text-bodyText mt-16 max-[420px]:text-[48px]'>Nuestras instalaciones</h1>
      <article className='w-3/4 flex flex-col my-0 mx-auto mt-12'>

        <div className='mb-16'>
          <h3 className='text-h3 text-bodyText'>Equipo de primera</h3>
          <div className='mt-8 flex max-[1031px]:flex-col'>
            <picture className='mr-9 max-[1031px]:m-0'>
              <img className='w-[600px] rounded-lg shadow-[#131313f8] shadow-lg max-[1031px]:w-full' src={Material} alt='image' />
            </picture>
            <p className='text-bodyText w-1/2 content-center max-[1031px]:w-[97%] max-[1031px]:mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque soluta repellat enim! Voluptas, voluptates sequi. Molestiae, alias reprehenderit voluptatem possimus obcaecati, mollitia voluptates reiciendis in perferendis voluptate distinctio repellendus blanditiis!</p>
          </div>
        </div>

        <div className='mb-16'>
          <h3 className='text-h3 text-bodyText'>Piscina climatizada</h3>
          <div className='flex mt-8 max-[1031px]:flex-col'>
            <picture className='mr-9 max-[1031px]:m-0'>
              <img className='w-[600px] aspect-[3/2] rounded-lg shadow-[#131313f8] shadow-lg max-[1031px]:w-full' src={Piscina} alt='image' />
            </picture>
            <p className='text-bodyText w-1/2 content-center max-[1031px]:w-[97%] max-[1031px]:mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, facere. Officia illum non maxime earum hic, laboriosam nemo facilis? Consequuntur at qui nostrum eligendi optio illum magnam dolor accusantium sapiente.</p>
          </div>
        </div>

        <div>
          <h3 className='text-h3 text-bodyText'>Sauna</h3>
          <div className='flex mt-8 max-[1031px]:flex-col'>
            <picture className='mr-9 max-[1031px]:m-0'>
              <img className='w-[600px] rounded-lg shadow-[#131313f8] shadow-lg max-[1031px]:w-full' src={Sauna} alt='image' />
            </picture>
            <p className='text-bodyText w-1/2 content-center max-[1031px]:w-[97%] max-[1031px]:mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est magnam, ut aliquam voluptates iusto numquam suscipit excepturi, repellendus adipisci aspernatur nostrum error nihil debitis deserunt vero rem natus doloribus.</p>
          </div>
        </div>
      </article>
    </section>
  )
}
