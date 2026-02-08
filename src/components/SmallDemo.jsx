import { useEffect } from 'react';
import { useSmallStore } from '../stores/useSmallStore';
import { Moon, Sun, RotateCcw, Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';

export const SmallDemo = () => {
    const { count, theme, increment, decrement, toggleTheme, reset } = useSmallStore();

    // Update body class for theme
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <div className={clsx(
            "p-8 rounded-xl shadow-lg transition-colors duration-300 w-full max-w-md mx-auto border",
            theme === 'dark' ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-gray-200 text-gray-800"
        )}>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Small Project Demo</h2>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                    title="Toggle Theme"
                >
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="text-6xl font-bold tabular-nums">
                    {count}
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={decrement}
                        className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-medium transition-colors"
                    >
                        <Minus size={18} /> Decrease
                    </button>
                    <button
                        onClick={increment}
                        className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 font-medium transition-colors"
                    >
                        <Plus size={18} /> Increase
                    </button>
                </div>

                <button
                    onClick={reset}
                    className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors mt-4"
                >
                    <RotateCcw size={14} /> Reset State
                </button>
            </div>

            <div className="mt-8 p-4 bg-gray-50 dark:bg-slate-900 rounded-lg text-sm">
                <p className="font-semibold mb-2 text-gray-500 dark:text-gray-400">Concept:</p>
                <p>
                    This example uses a single global store for simple state (count) and UI preferences (theme).
                    No complex logic, just direct state updates.
                </p>
            </div>
        </div>
    );
};
