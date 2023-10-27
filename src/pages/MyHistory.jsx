import perfil from '../img/perfil.png';
import '../css/history.css'

const MyHistory = () => {
  return (
    <article className='grid paddins history'>

      <div className="history__perfil">

        <img src={perfil} alt="imagen de perfil" className='history__perfil__img'/>

        <h4 className='history__perfil__title'>Apasionate Developer</h4>

      </div>

      <div className="history__information">

        <h3 className='history__information__title'>Un Poco Más de Mi</h3>

        <p className='history__information__text'>
          Permítame presentarme, soy Jhonatan Josué Véliz Vásquez y mi viaje en el mundo de la programación comenzó de manera autodidacta a los 18 años.
        </p>

        <p className='history__information__text'>
          Al principio, me enfrenté a la complejidad de las numerosas tecnologías disponibles. Sin embargo, decidí establecer una base sólida enfocándome en los fundamentos. Durante esos años, mientras completaba mi bachillerato en Computación, me sumergí en el estudio de estructuras de datos y algoritmos, abordando simultáneamente las tareas académicas.
        </p>

        <p className='history__information__text'>
          Posteriormente, mi educación se amplió gracias a Udemy, una de mis plataformas preferidas para el aprendizaje. Con la guía de varios instructores destacados, comencé mi trayecto en el desarrollo web, adquiriendo habilidades en diversas tecnologías que ahora forman parte integral de mi conjunto de habilidades.
        </p>

        <p className='history__information__text'>
          Hoy en día, me enorgullece decir que cuento con un conocimiento sólido en desarrollo Full Stack y mantengo una constante actualización en las tecnologías más relevantes de la industria.
        </p>

      </div>

    </article>
  )
}
export default MyHistory