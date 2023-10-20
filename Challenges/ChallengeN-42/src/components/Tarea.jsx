import "./tarea.css";
import PropTypes from "prop-types";

function Tarea(props) {
  const { tarea, borrarDelete } = props;

  return (
      <div className="capsule" id={tarea.id}>
        <p>{tarea.tarea}</p>
        <button className="btn" onClick={() => borrarDelete(tarea.id)}>
          ❌
        </button>
      </div>
  );
}

Tarea.propTypes = {
  tarea: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tarea: PropTypes.string.isRequired
  }).isRequired,
  borrarDelete: PropTypes.func.isRequired
};

export default Tarea;
