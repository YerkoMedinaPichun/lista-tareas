import React from "react";
import "../styles/Tarea.scss";
import { AiOutlineDelete } from "react-icons/ai";

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        onClick={() => eliminarTarea(id)}
        className="tarea-contenedor-iconos"
      >
        <AiOutlineDelete className="tarea-icono" />
      </div>
    </div>
  );
};

export default Tarea;
