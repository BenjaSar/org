import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../listaOpciones/listaOpciones";
import Boton from "../boton";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const {registrarColaborador, crearEquipo} = props


  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log("Manejar el envio", event);
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo
    };
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (event)=>{
    event.preventDefault()
    crearEquipo({titulo:titulo, colorPrimario:color})
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          valor={nombre}
          setValor={setNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar foto"
          required
          valor={puesto}
          setValor={setPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required={true}
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones valor={equipo} setEquipo={setEquipo}
        equipos={props.equipos}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar título"
          required={true}
          valor={titulo}
          setValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en hexadecimal"
          required
          valor={color}
          setValor={actualizarColor}
          type = "color"
        />
        <Boton> Registrar equipo</Boton>
        </form>
    </section>
  );
};

export default Formulario;
