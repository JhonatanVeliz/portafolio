import { useDispatch } from "react-redux";
import { changeVisualizador } from "../feature/visualizador/visualizadorSlice";

const CardCertificate = ({ title, description, file, img, alt }) => {

  const dispatch = useDispatch();

  const handleChancheFile = () => {
    dispatch(changeVisualizador(file));
  }

  return (
    <div className="project__card">

      <img src={ img } alt={ alt } />

      <h3 className="project__card__title">{ title }</h3>

      <p className="project__card__text">
        { description }
      </p>

      <button className="btn__card" onClick={handleChancheFile}>
        Visualizar
      </button>

    </div>
  )
}

export default CardCertificate