import './TodoItem.css';
function TodoItem({todo, setTodos, index}){
  return (
        <li className="TodoItem">
          <span 
          className={`Icon Icon-check ${todo.completed ? "Icon-check--active" : ""}`}
            /* onClick={() => {
              setTodos(todo.completed = true)
            }} */
          >V</span>
          <p className={`TodoItem-p ${todo.completed ? "TodoItem-p--complete" : "" }`}>{todo.text}</p>
          <span className={`Icon Icon-delete`}
            /* onClick={() => {
              setTodos(todo.completed = false)
            }} */
          >X</span>
        </li>
  );
}

export { TodoItem };
