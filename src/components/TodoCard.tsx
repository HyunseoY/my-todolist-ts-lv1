import { TodoCardProps } from '../model/interface';

const TodoCard = ({
  item,
  todoDeleteClickBtn,
  todoUpdateClickBtn,
}: TodoCardProps) => {
  return (
    <div className="todo-container" key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <button
        className="delete-btn"
        onClick={() => todoDeleteClickBtn(item.id)}
      >
        삭제하기
      </button>
      <button
        className="update-btn"
        onClick={() => todoUpdateClickBtn(item.id)}
      >
        {item.isDone ? '취소' : '완료'}
      </button>
    </div>
  );
};

export default TodoCard;
