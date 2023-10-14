import perfil from "../img/perfil.png";
const About = () => {
  return (
    <section className='grid about'>

      <div className="about__perfil">

        <div className="about__perfil__bg"></div>

        <div className="about__perfil__content">
          <img src={perfil} alt="fotografia de perfil de Jhonatan Veliz" />
        </div>

      </div>

      <div className="about__info">

        <h1 className="about__info__title">
          <span className="about__info__title__span about__info__title__span--1">¡ Hola Soy Jhontan Véliz !</span>
          <span className="about__info__title__span about__info__title__span--2">Fullstack Developer</span>
        </h1>

        <div className="about__info__texts">
          <p>
            Soy un entusiasta desarrollador web, apasionado por transformar ideas en sitios web cautivadores y funcionales. Mi enfoque se centra en la optimización de la experiencia del usuario y el rendimiento. Estoy comprometido a mantenerme actualizado con las últimas tendencias y tecnologías web para ofrecer soluciones de vanguardia. Juntos, podemos hacer que tu visión cobre vida en la web.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About