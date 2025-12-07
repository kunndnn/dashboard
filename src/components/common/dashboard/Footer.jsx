const Footer = () => {
    return (
        <footer className="bg-white border-t dark:border-white px-6 py-4 text-center text-gray-600 dark:bg-black dark:text-gray-100">
            © {new Date().getFullYear()} My Site. All rights reserved.
        </footer>
    );
};

export default Footer;
