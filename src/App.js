import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';
import { useState } from 'react';

const defaultTodos = [
  { text : 'Cortar cebolla', completed: false},
  { text : 'Comer pizza', completed: true},
  { text : 'Estudiar React', completed: false},
  { text : 'Saltar lazo', completed: false},
  { text : 'Hacer ejercicio', completed: true},
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [tarea, setTarea] = useState('');
  console.log(`Se busca: ${tarea}`)
  
  return (
    <>
      <TodoCounter 
        completed={todos.filter(t => t.completed).length} 
        total={todos.length}
      />
      <TodoSearch tarea={tarea} setTarea={setTarea}/>

      <TodoList>
        {todos.map( (todo, index) => (
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
