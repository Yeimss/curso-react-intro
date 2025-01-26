import './CreateTodoBtn.css'
function CreateTodoBtn(props){
    return (
      <button type="button" className="CreateTodoButton" onClick={
        (event) => {
          console.log("Clickeaste manito");
          console.log(event)
          console.log(event.target)
        }
      }>+</button>
    );  
}

export { CreateTodoBtn };
