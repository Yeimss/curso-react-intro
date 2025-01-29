import './TodoItem.css';
function TodoItem({todo, onCompleted, onDeleted}){
  return (
        <li className="TodoItem">
          <span 
          className={`Icon Icon-check ${todo.completed ? "Icon-check--active" : ""}`}
          onClick={onCompleted}
          >V</span>
          <p className={`TodoItem-p ${todo.completed ? "TodoItem-p--complete" : "" }`}>{todo.text}</p>
          <span className={`Icon Icon-delete`}
          onClick={onDeleted}
          >X</span>
        </li>
  );
}

export { TodoItem };
