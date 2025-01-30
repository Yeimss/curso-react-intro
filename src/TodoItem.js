import './TodoItem.css';
import {CompletedIcon} from './CompletedIcon'
import {DeletedIcon} from './DeletedIcon'
function TodoItem({todo, onCompleted, onDeleted}){
  return (
        <li className="TodoItem">
          <CompletedIcon completed={todo.completed} onComplete={onCompleted}/>
          <p className={`TodoItem-p ${todo.completed ? "TodoItem-p--complete" : "" }`}>{todo.text}</p>
          <DeletedIcon onDelete={onDeleted}/>
        </li>
  );
}

export { TodoItem };
