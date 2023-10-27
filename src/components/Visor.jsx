import { useSelector, useDispatch } from "react-redux";
import { removeVisualizador } from "../feature/visualizador/visualizadorSlice";

const Visor = () => {

  const state = useSelector(state => state.visualizador[0]);
  const dispatch = useDispatch();

  const removeVisor = () => {
    dispatch(removeVisualizador());
  }

  return (
    <aside className="visor">

      <div className="visor__close">
        <button onClick={removeVisor}>
          Cerrar
        </button>
      </div>

      <object data={state.file} className="visor__file">
        <p>asdasd</p>
      </object>

    </aside>
  )
}

export default Visor