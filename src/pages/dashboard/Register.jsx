import { Link, useNavigate } from "react-router-dom";
import CommonInput from "../../components/CommonInput";
import CommonButton from "../../components/CommonButton";
import { AUTH } from "../../constants";

export default function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
            <div className="w-full max-w-sm bg-white p-8 rounded-xl border border-neutral-200 shadow-md">

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Heading */}
                    <h2 className="text-2xl font-semibold text-gray-900">
                        {AUTH.CREATE_ACCOUNT}
                    </h2>

                    {/* Full Name */}
                    <CommonInput
                        label="Full Name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />

                    {/* Email */}
                    <CommonInput
                        label="Email address"
                        type="email"
                        placeholder="example@company.com"
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />

                    {/* Password */}
                    <CommonInput
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        showPasswordToggle
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />

                    {/* Confirm Password */}
                    <CommonInput
                        label="Confirm Password"
                        type="password"
                        placeholder="••••••••"
                        showPasswordToggle
                        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 text-sm shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />

                    {/* Register Button */}
                    <CommonButton
                        type="submit"
                        label="Create Account"
                        className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
                    />

                    {/* Already have account */}
                    <p className="text-sm text-gray-600 text-center">
                        {AUTH.ALREADY_ACCOUNT}
                        <Link
                            to="/dashboard/login"
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            {AUTH.LOGIN_HERE}
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
