import "./listaOpciones.css";
const ListaOpciones = (props) => {

  /*Método Map -> arreglo.map( (elemento, index) => {
        return <option><ioption>
    }
    )*/
  
 const manejarCambio = (event)=>{
    console.log("cambio",event.target.value)
    props.setEquipo(event.target.value)
 }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value ={equipo}>{equipo}</option>
        ))}
        {/*
            lect>
            {equipos.map((equipo, index)=>{
                return <option key={index} >{equipo}</option>
            })} 
            <option>Programación</option>
            <option>Front End</option>
            <option>Data Sciences</option>
            <option>Devops</option>
            <option>UX y diseño</option>
            <option>Móvil</option>
            <option>Innovación y Gestión</option>*/}
      </select>
    </div>
  );
};

export default ListaOpciones;
