import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
import { Todo } from './model/interface';

function App() {
  const todoList = JSON.parse(localStorage.getItem('todo') || '[]') as Todo[];
  const [todos, setTodos] = useState<Todo[]>(todoList);
  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
