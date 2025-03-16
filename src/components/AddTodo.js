import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 flex gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo..."
                className="border p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
};

export default AddTodo;
