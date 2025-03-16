import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <ul className="p-4">
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                    className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
