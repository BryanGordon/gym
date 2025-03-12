import { NavLink } from 'react-router-dom'
// #B4B4B4
// #620089
// #000034
export function Navbar () {
  return (
    <nav id='top'>
      <ul className='w-full py-8 bg-gradient-to-t from-[#000034] via-[#3B0050] to-[#620089] flex justify-around'>
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
