import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <Provider store={store}>
            <div className="max-w-md mx-auto mt-10 border p-4 rounded shadow-lg">
                <h1 className="text-xl font-bold text-center mb-4">Todo App with Redux</h1>
                <AddTodo />
                <TodoList />
            </div>
        </Provider>
    );
};

export default App;
