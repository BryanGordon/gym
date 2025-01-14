import { NavLink } from 'react-router-dom'
// #B4B4B4
export function Navbar () {
  return (
    <nav>
      <ul className='w-full py-8 bg-[#8F90B5] flex justify-around'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/servicios'>Servicios</NavLink>
        </li>
        <li>
          <NavLink to='/contactos'>Contactos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
