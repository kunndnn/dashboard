import React from 'react';
import { useAppStore } from '../stores/large/useAppStore';
import { ShoppingCart, User, LogOut, Plus, Trash2 } from 'lucide-react';

export const LargeDemo = () => {
    const {
        user, login, logout,
        cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice,
        products, fetchProducts, isLoadingProducts
    } = useAppStore();

    React.useEffect(() => {
        fetchProducts();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        if (name && email) login(name, email);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column: Products & User */}
            <div className="lg:col-span-2 space-y-8">

                {/* User Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <User className="text-blue-600" /> User Profile
                        </h2>
                        {user && (
                            <button
                                onClick={logout}
                                className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                            >
                                <LogOut size={16} /> Logout
                            </button>
                        )}
                    </div>

                    {user ? (
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <p className="font-semibold text-gray-800">Welcome, {user.name}!</p>
                            <p className="text-sm text-blue-600">{user.email}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleLogin} className="flex gap-4 items-end">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input name="name" required className="w-full px-3 py-2 border rounded-lg" placeholder="John Doe" />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input name="email" required type="email" className="w-full px-3 py-2 border rounded-lg" placeholder="john@example.com" />
                            </div>
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Login
                            </button>
                        </form>
                    )}
                </div>

                {/* Products Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Products</h2>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">FakeStoreAPI</span>
                    </div>

                    {isLoadingProducts ? (
                        <div className="flex justify-center p-10"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {products.map(product => (
                                <div key={product.id} className="p-4 border rounded-lg flex flex-col gap-3 hover:shadow-md transition-shadow bg-white">
                                    <div className="flex gap-4">
                                        <img src={product.image} alt={product.title} className="w-16 h-16 object-contain" />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium text-gray-800 truncate" title={product.title}>{product.title}</h3>
                                            <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                                            <p className="font-bold text-gray-900 mt-1">${product.price}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => addToCart({ id: String(product.id), name: product.title, price: product.price })}
                                        className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors text-sm font-medium"
                                    >
                                        <Plus size={16} /> Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: Cart */}
            <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <ShoppingCart className="text-green-600" /> Cart
                        </h2>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">
                            {totalItems()} Items
                        </span>
                    </div>

                    {cart.length === 0 ? (
                        <div className="text-center py-8 text-gray-400">
                            Your cart is empty.
                        </div>
                    ) : (
                        <>
                            <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                                {cart.map(item => (
                                    <li key={item.id} className="flex justify-between items-start pb-4 border-b last:border-0 layer">
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-xs text-gray-500">${item.price} x {item.quantity}</p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className="font-semibold text-gray-900">${item.price * item.quantity}</span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Total</span>
                                    <span className="text-2xl font-bold text-gray-900">${totalPrice()}</span>
                                </div>
                                <button
                                    onClick={clearCart}
                                    className="w-full py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors text-sm"
                                >
                                    Clear Cart
                                </button>
                                <button className="w-full mt-3 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold transition-colors">
                                    Checkout
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
