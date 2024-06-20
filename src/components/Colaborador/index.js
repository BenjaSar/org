import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.data;
  const { colorPrimario, eliminarColaborador, like } = props;
  console.log("Esta es la posición: ", puesto);
  //condicion ?  verdadero : falso
  return (
    <div className="colaborador">
      <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt="github" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav? <AiFillHeart color="red" onClick={()=>like(id)}/>:  <AiOutlineHeart onClick={()=>like(id)}/>}
      </div>
    </div>
  );
};

export default Colaborador;
