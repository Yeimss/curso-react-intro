import './TodoSearch.css'

function TodoSearch(props){
  
  return (
    <input placeholder="cortar cebolla" 
    className="TodoSearch" type="text"
    value={props.tarea} 
    onChange={(event) => {
      props.setTarea(event.target.value)
    }}></input>
  ); 
}

export { TodoSearch };
 