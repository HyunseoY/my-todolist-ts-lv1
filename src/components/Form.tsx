import { ChangeEvent, useState } from 'react';
import { StateProps, Todo } from '../model/interface';

const INIT_VALUE = { title: '', content: '', id: 1, isDone: false };

const Form = ({ todos, setTodos }: StateProps) => {
  const [todo, setTodo] = useState<Todo>(INIT_VALUE);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const todoID = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

  const todoAddClickBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (todo.title === '' || todo.content === '') return;

    localStorage.setItem(
      'todo',
      JSON.stringify([...todos, { ...todo, id: todoID }])
    );
    setTodos(JSON.parse(localStorage.getItem('todo') || '[]'));
    setTodo(INIT_VALUE);
  };

  return (
    <form className="submit-container">
      <div className="input-box">
        제목
        <input
          className="submit-input"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        내용
        <input
          className="submit-input"
          name="content"
          value={todo.content}
          onChange={onChangeHandler}
        />
      </div>
      <button className="submit-btn" onClick={todoAddClickBtn}>
        추가하기
      </button>
    </form>
  );
};

export default Form;
