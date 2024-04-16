import { useState } from 'react'

import Todo from "./components/todo"
import TodoForm from './components/TodoForm';
import "./App.css";


function App() {
  const [todos, setTODOS] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },

  ]);

  const addTodo = (text, category) => {

    const newTodos = [...todos,{
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: False,
    }
  ]

  setTODOS(newTodos);
  }

  return (
    < div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div >
  );

}

export default App
