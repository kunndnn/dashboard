import { useNavigate, Link, data } from "react-router-dom";
import CommonInput from "@/components/ui/CommonInput";
import CommonButton from "@/components/ui/CommonButton";
import { post } from '../../api.js'
import { AUTH } from "../../constants";
import { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/dashboard");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

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
                        name="email"
                        placeholder="example@company.com"
                        className="w-full px-3 py-2.5 bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                    />

                    {/* Password */}
                    <CommonInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        showPasswordToggle
                        className="w-full px-3 py-2.5 border-gray-300 bg-gray-50 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
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
