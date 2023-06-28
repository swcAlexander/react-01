import React from 'react';

const Todo = ({ text, complited, onToggleComplited, onDelete }) => {
  return (
    <div>
      <input type="checkbox" checked={complited} onChange={onToggleComplited} />
      <p>{text}</p>
      <button type="button" onClick={onDelete}></button>
    </div>
  );
};
export default Todo;
