import ProjectCard from "../components/ProjectCard";

import sabor_sazon from "../img/proyecto-1.jpg";

import html from "../img/html-min.png";
import css from "../img/css-min.png";
import js from "../img/js-min.png";

const tecnologies = [
  { 
    img : sabor_sazon, title : 'Sabor y Sazón', alt : 'proyecto de restaurante', 
    text : 'Página web estatica de un restaurante.', path : 'https://jhonatanveliz.github.io/restaurant/index.html', id : 311,
      tecnologies : [
      { img : html, alt : 'html' },
      { img : css, alt : 'css' },
      { img : js, alt : 'javascript' },
    ]
  }
]

const Projects = () => {
  return (
    <div className='grid projects' id="projects">

      <div className="projects__cards">
        {
          tecnologies.map(( proyecto ) => (
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

    </div>
  )
}

export default Projects