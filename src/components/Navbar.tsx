import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <nav>
      <ul className='w-full py-8 bg-cyan-600 flex justify-around'>
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
