import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';
import { useState } from 'react';

const defaultTodos = [
  { text : 'Cortar cebolla', completed: false},
  { text : 'Comer pizza', completed: true},
  { text : 'Estudiar React', completed: true},
  { text : 'Saltar lazo', completed: false},
  { text : 'Hacer ejercicio', completed: true},
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [tarea, setTarea] = useState('');
  const searchedTodo = todos.filter(
    (t) => {
    const text = t.text.toLocaleLowerCase();
    const searchedTest = tarea.toLocaleLowerCase()
    return text.includes(searchedTest)
  }); 
  
  return (
    <>
      <TodoCounter 
        completed={todos.filter(t => t.completed).length} 
        total={todos.length}
      />
      <TodoSearch tarea={tarea} setTarea={setTarea}/>

      <TodoList>
        {searchedTodo.map( (todo, index) => (
            <TodoItem 
            key={todo.text}
            todo={todo}
            setTodos={setTodos}
            index={index} />
          ))}
      </TodoList>
      <CreateTodoBtn/>
    </>
  );
}

export default App;
