import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';
import React from 'react';

const defaultTodos = [
  { text : 'Cortar cebolla', completed: false},
  { text : 'Comer pizza', completed: true},
  { text : 'Estudiar React', completed: false},
  { text : 'Saltar lazo', completed: false},
  { text : 'Hacer ejercicio', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter completed={3} total={5}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map( todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} />
          ))}
      </TodoList>
      <CreateTodoBtn/>
    </>
  );
}

export default App;
