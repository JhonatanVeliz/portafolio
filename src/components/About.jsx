import { Link } from "react-router-dom";
import LinksImg from "../hooks/LinksWithImg";

import perfil from "../img/perfil.png";
import linkedin from '../img/in.png';
import github from '../img/github.png';
import whatsApp from '../img/whatsApp.png';

import '../css/about.css';

const About = () => {

  const redesSocials = [
    { img: linkedin, title: 'linkedin', id: 211, path: 'https://www.linkedin.com/in/jhonatan-v%C3%A9liz-1a73a9271/' },
    { img: github, title: 'github', id: 212, path: 'https://github.com/JhonatanVeliz' },
    { img: whatsApp, title: 'whatsApp', id: 213, path: 'https://api.whatsapp.com/send?phone=50670910' }
  ];

  return (
    <section className='grid about'>

      <div className="about__perfil">

        <div className="about__perfil__border"></div>

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
            Soy un desarrollador autodidacta desde los 18 años, dispuesto a dar vida a tus ideas. Mi especialidad se encuentra en el área del frontend, aunque disfruto explorar y aprender de todos los aspectos del desarrollo web.
            <br />
            ¡Listo para convertir tus proyectos en realidad!
          </p>

        </div>

      </div>

      <div className="about__contact paddings">

        <div className="about__contact__links">
          {
            redesSocials.map((redSocial) => (
              <LinksImg
                key={redSocial.id}
                title={redSocial.title}
                img={redSocial.img}
                classNames={`about__contact__link`}
                path={redSocial.path}
              />
            ))
          }
        </div>

        <Link to='https://api.whatsapp.com/send?phone=50670910' className="about__contact__btn">Contactame</Link>

      </div>

    </section>
  )
}

export default About