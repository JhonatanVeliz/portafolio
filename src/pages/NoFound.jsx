import { useParams } from "react-router-dom";

import noFound from '../img/no-found.svg';

const NoFound = () => {

  const params = useParams();

  const url = Object.values(params)[0];

  return (
    <div className="grid paddings no-found" id="no-found">
      <img src={ noFound } alt={`página ${url} no encontrada.`}  className="no-found__img"/>
      <h2 className="no-found__title">Error 404 no se pudo acceder a la página<br /> 
        <span>" { url } "</span>
      </h2>
    </div>
  )
}

export default NoFound