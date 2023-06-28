import React from 'react';
import Todo from '../TodoItem/TodoItem';
// import classNames from 'classnames';

const TodoList = ({ todos, onToggleComplited, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, complited }) => (
        <li key={id}>
          <Todo
            text={text}
            complited={complited}
            onToggleComplited={() => onToggleComplited(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
