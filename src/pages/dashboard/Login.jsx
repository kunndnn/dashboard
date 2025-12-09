import { useNavigate, Link } from "react-router-dom";
import CommonInput from "../../components/CommonInput";
import CommonButton from "../../components/CommonButton";
import { AUTH } from "../../constants";

export default function Login() {
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
                        {AUTH.SIGN_IN}
                    </h2>
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

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                            />
                            {AUTH.REMEMBER_ME}
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            {AUTH.FORGOT_PASS}
                        </Link>
                    </div>

                    {/* Login Button */}
                    <CommonButton type="submit" label="Login" className="w-full" />

                    {/* Register */}
                    <p className="text-sm text-gray-600 text-center">
                        {AUTH.NOT_REGISTERED}
                        <Link
                            to="/dashboard/register"
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            {AUTH.CREATE_ACCOUNT}
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
