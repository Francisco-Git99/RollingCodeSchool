import Tarea from "./Tarea";
import { useState } from "react";
import "./formulario.css";

function Formulario() {
  const [tarea, setTarea] = useState("");
  const [listTarea, setListTarea] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (tarea === "") {
      alert("Agrega una tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
    };

    const agregarTarea = [nuevaTarea, ...listTarea];
    setListTarea(agregarTarea);

    setTarea("");
  };

  const handleChange = (ev) => {
    setTarea(ev.target.value);
  };

  function borrarDelete(id) {
    const borrar = listTarea.filter((item) => item.id !== id);
    setListTarea(borrar);
  }

  return (
    <div className="bodyForm">
      <h1>Bienvenido</h1>
      <h2>Ingresa tus tareas</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su tarea a realizar"
          value={tarea}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          ✅
        </button>
      </form>

      <div className="contenedorTareas">
        {listTarea.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            tarea={tarea}
            borrarDelete={borrarDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Formulario;
