import { useState } from 'react';
import './TodoSearch.css'

/* const [tarea, setTarea] = useState("")

const cambiarTarea = (nuevaTarea) => {
  setTarea(nuevaTarea)
} */

function TodoSearch(props){
    return (
      <input placeholder="cortar cebolla" className="TodoSearch" type="text" onChange={(event) => {
        console.log(event.target.value)
      }}></input>
    ); 
}

export { TodoSearch };
