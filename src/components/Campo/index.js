import { useState } from "react";
import "./Campo.css";

//Props=> propiedades de los componentes. Datos que se le envian a los componentes. Permiten que los componentes se componen de alguna forma.
const Campo = (props) => {
  const placeHolderModificado = `${props.placeholder}...`;
  //Destructuración
  const {type = "text"} =  props
  console.log(props.type)

  const manejarCambio = (event) => {
    props.setValor(event.target.value);
  };
  return (
    <div className={ `campo campo-${type} `}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeHolderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
