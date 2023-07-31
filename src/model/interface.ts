export interface Todo {
  title: string;
  content: string;
  id: number;
  isDone: boolean;
}

export interface StateProps {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

export interface TodoCardProps {
  item: Todo;
  todoDeleteClickBtn: (id: number) => void;
  todoUpdateClickBtn: (id: number) => void;
}
