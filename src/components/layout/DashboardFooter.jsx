export default function DashboardFooter() {
    return (
        <footer className="mt-6 border-t dark:border-gray-800 pt-4 text-center text-gray-500 text-sm pb-4">
            &copy; {new Date().getFullYear()} Dashboard Panel. All rights reserved.
        </footer>
    );
}
