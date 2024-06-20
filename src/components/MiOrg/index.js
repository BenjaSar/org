//import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props)=>{

    //Estado - hooks: funcionalidades que nos ayudan a trabajar con el comportamiento de React
    //Hook => useState
    //useState()
    //Forma de utilizar useState const [nombreVariable, funcionActualiza]= useState(initialValue)
    
    /*const [mostrar, actualizarMostrar] = useState(true)

    const manejarClick = ()=>{
        console.log("Mostrar/Ocultar elemento")
        actualizarMostrar(!mostrar)

    }*/

    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>
        <img src="/img/addBoton.png" alt="addBoton" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg

