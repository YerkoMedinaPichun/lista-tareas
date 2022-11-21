import React, { useState } from "react";
import "../styles/TareaFormulario.scss";
import { v4 as uuidv4 } from "uuid";

const TareaFormulario = (props) => {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        onChange={manejarCambio}
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
};

export default TareaFormulario;
