import ProjectCard from "../components/ProjectCard";

import proyecto1 from "../img/proyecto-1.jpg";

import html from "../img/html-min.png";
import css from "../img/css-min.png";
import js from "../img/js-min.png";

const tecnologies = [
  { 
    img : proyecto1, title : 'Barber Shop', alt : 'proyecto de barberias', 
    text : 'Plantilla web de una barber shop.', path : 'ruta', id : 311,
      tecnologies : [
      { img : html, alt : 'html' },
      { img : css, alt : 'css' },
      { img : js, alt : 'javascript' },
    ]
  },
  { 
    img : proyecto1, title : 'Barber Shop', alt : 'proyecto de barberias', 
    text : 'Descripcion del proyecto', path : 'ruta', id : 321,
      tecnologies : [
      { img : html, alt : 'html' },
      { img : css, alt : 'css' },
      { img : js, alt : 'javascript' },
    ]
  },
  { 
    img : proyecto1, title : 'Barber Shop', alt : 'proyecto de barberias', 
    text : 'Descripcion del proyecto', path : 'ruta', id : 331,
      tecnologies : [
      { img : html, alt : 'html' },
      { img : css, alt : 'css' },
      { img : js, alt : 'javascript' },
    ]
  },
  { 
    img : proyecto1, title : 'Barber Shop', alt : 'proyecto de barberias', 
    text : 'Descripcion del proyecto', path : 'ruta', id : 341,
      tecnologies : [
      { img : html, alt : 'html' },
      { img : css, alt : 'css' },
      { img : js, alt : 'javascript' },
    ]
  }
]

const Projects = () => {
  return (
    <div className='grid projects'>

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