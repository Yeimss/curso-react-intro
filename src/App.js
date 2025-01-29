import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn';
import { useState } from 'react';

const defaultTodos = [
  { text : 'Cortar cebolla', completed: false},
  { text : 'Comer pizza', completed: false},
  { text : 'Estudiar React', completed: false},
  { text : 'Saltar lazo', completed: false},
  { text : 'Hacer ejercicio', completed: false},
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

  const completeTodo = (text) =>{
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(t => t.text === text)
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    setTodos(newTodos.filter(t => t.text !== text))
  }

  return (
    <>
      <TodoCounter 
        completed={todos.filter(t => t.completed).length} 
        total={todos.length}
      />
      <TodoSearch tarea={tarea} setTarea={setTarea}/>

      <TodoList>
        {searchedTodo.map( (todo) => (
            <TodoItem 
            key={todo.text}
            todo={todo}
            onCompleted = {() => {completeTodo(todo.text)}}
            onDeleted = {() => {deleteTodo(todo.text)}}
            />
          ))}
      </TodoList>
      <CreateTodoBtn/>
    </>
  );
}

export default App;
