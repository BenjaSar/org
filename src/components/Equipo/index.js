import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Destructuración
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const estiloTitulo = { borderColor: colorPrimario };
  const { colaboradores, eliminarColaborador, actualizarColorEquipo, like } = props;
  console.log(colaboradores.length > 0);

  return (
    <div>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
        >
          <input
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario, 0.6)}
            onChange={(event) => {
              actualizarColorEquipo(event.target.value, id);
            }}
          />
          <h3 style={estiloTitulo}> {titulo} </h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                data={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like = {like}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Equipo;
