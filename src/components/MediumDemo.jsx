import { useEffect, useState } from 'react';
import { useMediumStore } from '../stores/useMediumStore';
import { Trash2, CheckCircle, Circle, RefreshCw, Plus, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';

export const MediumDemo = () => {
    const {
        todos, filter, isLoading, error,
        addTodo, toggleTodo, removeTodo, setFilter, fetchTodos
    } = useMediumStore();

    const [inputText, setInputText] = useState('');

    // Initial fetch only if empty (preserves persisted data)
    useEffect(() => {
        if (todos.length === 0) {
            fetchTodos();
        }
    }, []);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

    const activeCount = todos.filter(t => !t.completed).length;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        addTodo(inputText);
        setInputText('');
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Medium Project: API Todos</h2>
                    <p className="text-gray-500 text-sm">Real API calls to JSONPlaceholder</p>
                </div>
                <button
                    onClick={() => fetchTodos()}
                    disabled={isLoading}
                    className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors disabled:opacity-50"
                    title="Refresh Data"
                >
                    <RefreshCw size={20} className={clsx(isLoading && "animate-spin")} />
                </button>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-center gap-2 text-sm">
                    <AlertCircle size={16} />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="What needs to be done?"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    disabled={!inputText.trim() || isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center gap-2"
                >
                    <Plus size={18} /> Add
                </button>
            </form>

            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {['all', 'active', 'completed'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={clsx(
                            "px-3 py-1 rounded-full text-sm font-medium capitalize transition-colors",
                            filter === f
                                ? "bg-blue-100 text-blue-700"
                                : "text-gray-500 hover:bg-gray-100"
                        )}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {isLoading && todos.length === 0 ? (
                <div className="py-10 text-center text-gray-500">Loading todos...</div>
            ) : todos.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                    <p>No todos yet.</p>
                </div>
            ) : (
                <ul className="space-y-2">
                    {filteredTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={() => toggleTodo(todo.id)}
                            onDelete={() => removeTodo(todo.id)}
                        />
                    ))}
                </ul>
            )}

            <div className="mt-6 border-t pt-4 text-sm text-gray-500 flex justify-between">
                <span>{activeCount} items left</span>
            </div>
        </div>
    );
};

const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
            <button
                onClick={onToggle}
                className={clsx(
                    "transition-colors",
                    todo.completed ? "text-green-500" : "text-gray-300 hover:text-blue-500"
                )}
            >
                {todo.completed ? <CheckCircle size={22} className="fill-current" /> : <Circle size={22} />}
            </button>

            <span className={clsx(
                "flex-1 text-gray-700 transition-all",
                todo.completed && "line-through text-gray-400"
            )}>
                {todo.title}
            </span>

            <button
                onClick={onDelete}
                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1"
                title="Delete Todo"
            >
                <Trash2 size={18} />
            </button>
        </li>
    );
};
