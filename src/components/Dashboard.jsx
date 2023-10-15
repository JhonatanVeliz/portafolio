import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className='grid plus'>

      <div className="plus__routers">

        <NavLink 
          to={'/'}
          className={({isActive}) => isActive ? 'plus__link__active plus__link' : 'plus__link'}
        >
          Proyectos
        </NavLink>

        <NavLink 
          to={'/certifys'}
          className={({isActive}) => isActive ? 'plus__link__active plus__link' : 'plus__link'}
          >
          Certificaciones 
        </NavLink>

        <NavLink 
          to={'/history'}
          className={({isActive}) => isActive ? 'plus__link__active plus__link' : 'plus__link'}
        >
          Más De Mi
        </NavLink>

      </div>

    </div>
  )
}

export default Dashboard