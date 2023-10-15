import { Link } from "react-router-dom";

const ProjectCard = ({ img, title, alt, text, path, tecnologies }) => {
  return (
    <Link to={ path } className="project__card">

      <img src={ img } alt={ alt } />

      <h3 className="project__card__title">{ title }</h3>

      <p className="project__card__text">
        { text }
      </p>

      <div className="project__card__tecnologies">

        {
          tecnologies.map( ( tecnologie, index ) => (
            <TecnologieImg 
              key={index} 
              img={tecnologie.img}
              alt={tecnologie.alt}
            />
          ))
        }
        
      </div>

    </Link>
  )
}

const TecnologieImg = ({ img, alt }) => {
  return (
    <img 
      src={ img } 
      alt={ alt } 
      className="project__card__tecnologies__img"
    />
  )
};

export default ProjectCard