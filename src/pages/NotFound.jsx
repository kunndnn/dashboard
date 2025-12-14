import { useNavigate } from 'react-router-dom';
import CommonButton from '@/components/ui/CommonButton'
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
            <h1 className="text-[120px] font-extrabold text-gray-800 leading-none drop-shadow-lg">404</h1>
            <h2 className="text-3xl font-semibold text-gray-700 mt-4">Oops! Page Not Found</h2>
            <p className="text-gray-500 mt-2 text-center max-w-md">
                The page you're looking for doesn't exist or may have been moved.
                Please check the URL or return to the home page.
            </p>
            <CommonButton onClick={() => navigate(-1)}
                className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                label='Go Back'
            />
        </div>
    );
};

export default NotFound;
