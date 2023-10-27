import ProjectCard from "../components/ProjectCard";

// imagenes portadas
import sabor_sazon from "../img/proyecto-1.jpg";
import calculadora from "../img/proyecto-10.jpg";
import clima from "../img/proyecto-8.jpg";
import todo_list from "../img/proyecto-11.jpg";

// Imagenes iconos
import html from "../img/html-min.png";
import css from "../img/css-min.png";
import js from "../img/js-min.png";
import react from "../img/react-min.png";
import tailwind from "../img/tailwind-min.png";
import redux from "../img/redux-min.png";
import router from "../img/router-dom-min.png";

import '../css/projects.css'

const Projects = () => {

  const myProjects = [
    {
      img: sabor_sazon, title: 'Sabor y Sazón', alt: 'proyecto de restaurante',
      text: 'Página web estatica de un restaurante.', path: 'https://jhonatanveliz.github.io/restaurant/index.html', id: 311,
      tecnologies: [
        { img: html, alt: 'html' },
        { img: css, alt: 'css' },
        { img: js, alt: 'javascript' },
      ]
    },
    {
      img: clima, title: 'App Clima', alt: 'proyecto del clima',
      text: 'Proyecto web del Clima', path: 'https://jhonatanveliz.github.io/app-clima', id: 312,
      tecnologies: [
        { img: html, alt: 'html' },
        { img: css, alt: 'css' },
        { img: js, alt: 'javascript' }
      ]
    },
    {
      img: calculadora, title: 'Calculadora', alt: 'proyecto calculadora',
      text: 'Proyecto web de una calculadora', path: 'https://calculator-width-react.vercel.app/', id: 313,
      tecnologies: [
        { img: tailwind, alt: 'Tailwind css' },
        { img: react, alt: 'React' }
      ]
    },
    {
      img: todo_list, title: 'Todo App', alt: 'proyecto todo app',
      text: 'Proyecto web de enlistado de tareas', path: 'https://react-list-eta.vercel.app', id: 314,
      tecnologies: [
        { img: tailwind, alt: 'Tailwind css' },
        { img: redux, alt: 'Redux Toolkit' },
        { img: router, alt: 'React Router Dom v6' },
        { img: react, alt: 'React' }
      ]
    }
  ]

  return (
    <article className='grid projects' id="projects">

      <div className="projects__cards">
        {
          myProjects.map((proyecto) => (
            <ProjectCard
              key={proyecto.id}
              img={proyecto.img}
              title={proyecto.title}
              alt={proyecto.alt}
              text={proyecto.text}
              path={proyecto.path}
              tecnologies={proyecto.tecnologies}
            />
          ))
        }
      </div>

    </article>
  )
}

export default Projects