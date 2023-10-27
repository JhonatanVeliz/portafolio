import { NavLink } from "react-router-dom";

const RoutesLinks = () => {
  return (
    <div className='grid router'>

      <nav className="router__content">

        <NavLink 
          to={'/'}
          className={({isActive}) => isActive ? 'router__route__active router__route' : 'router__route'}
        >
          Proyectos
        </NavLink>

        <NavLink 
          to={'/certificates'}
          className={({isActive}) => isActive ? 'router__route__active router__route' : 'router__route'}
          >
          Certificaciones 
        </NavLink>

        <NavLink 
          to={'/history'}
          className={({isActive}) => isActive ? 'router__route__active router__route' : 'router__route'}
        >
          Más De Mi
        </NavLink>

      </nav>

    </div>
  )
}

export default RoutesLinks