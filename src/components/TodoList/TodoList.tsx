import React, { JSX } from "react";
import { TodoItem } from "../../types";

type TodoListProps = {
  todo: TodoItem[];
};

export function TodoList({ todo }: TodoListProps): JSX.Element {
  return (
    <ul>
      {todo.map(item => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ul>
  );
}
