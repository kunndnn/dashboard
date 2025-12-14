import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-blue-600">
                    MyLogo
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 text-gray-700">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                    <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
