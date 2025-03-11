import { NavLink } from 'react-router-dom'
// #B4B4B4
export function Navbar () {
  return (
    <nav>
      <ul className='w-full py-8 bg-[#8F90B5] flex justify-around'>
        <li className='text-navText'>
          <NavLink className='navbar-element' to='/'>Home</NavLink>
        </li>
        <li className='text-navText'>
          <NavLink className='navbar-element' to='/servicios'>Servicios</NavLink>
        </li>
        <li className='text-navText'>
          <NavLink className='navbar-element' to='/contactos'>Contactos</NavLink>
        </li>
      </ul>
    </nav>
  )
}
