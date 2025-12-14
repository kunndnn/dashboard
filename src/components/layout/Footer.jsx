import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">MyWebsite</h3>
                    <p className="text-sm">
                        Building high-quality web apps with reusable component systems.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
                    <div className="flex gap-4 text-xl">
                        <a href="#" target="_blank">🌐</a>
                        <a href="#" target="_blank">🐦</a>
                        <a href="#" target="_blank">📸</a>
                        <a href="#" target="_blank">▶️</a>
                    </div>
                </div>

            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
                © {new Date().getFullYear()} MySite. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
