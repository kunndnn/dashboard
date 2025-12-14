import { useEffect, useState } from "react";
import CommonInput from "../../components/CommonInput";
import CommonButton from "../../components/CommonButton";
import CommonCard from "../../components/CommonCard";
import CommonImage from "../../components/CommonImage";
import { Eye, EyeOff } from "lucide-react";

const Profile = () => {
    const [data, setData] = useState({
        name: "John Doe",
        email: "john@example.com",
        phone: "+91 9876543210",
        role: "Admin",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [autoShow, setAutoShow] = useState(false); // for typing auto-show

    // 🔥 Auto show while typing + auto hide after 800ms
    useEffect(() => {
        if (!data.password) return;

        setAutoShow(true);

        const timeout = setTimeout(() => {
            setAutoShow(false);
        }, 800);

        return () => clearTimeout(timeout);
    }, [data.password]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Profile:", data);
    };

    const finalPasswordState = showPassword || autoShow;

    return (
        <div className="grid md:grid-cols-2 gap-6">

            {/* LEFT — PROFILE CARD */}
            <CommonCard className="flex flex-col items-center text-center">
                <CommonImage
                    src="https://i.pravatar.cc/150"
                    alt='profile'
                    className="rounded-full w-28 h-28 border shadow"
                />

                <h2 className="text-xl font-semibold mt-4 dark:text-gray-100">{data.name}</h2>
                <p className="text-gray-600 dark:text-gray-100">{data.email}</p>

                <div className="mt-5 space-y-1 w-full text-left dark:text-white">
                    <p><strong>Phone:</strong> {data.phone}</p>
                    <p><strong>Role:</strong> {data.role}</p>
                </div>
            </CommonCard>

            {/* RIGHT — UPDATE FORM */}
            <CommonCard>
                <h2 className="text-xl font-semibold mb-4 dark:text-white">Update Profile</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <CommonInput
                        label="Full Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                    />

                    <CommonInput
                        label="Email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />

                    <CommonInput
                        label="Phone"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                    />

                    <CommonInput
                        label="Role"
                        name="role"
                        value={data.role}
                        onChange={handleChange}
                        placeholder="Admin / User"
                    />

                    {/* 👇 PASSWORD FIELD WITH ICON */}
                    <div className="relative">
                        <CommonInput
                            label="New Password"
                            type={finalPasswordState ? "text" : "password"}
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            placeholder="Enter new password"
                        />

                        {/* Eye Toggle Button */}
                        <CommonButton
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-1 top-6 text-gray-600 cursor-pointer"
                            variant="none"
                        >
                            {finalPasswordState ? (
                                <Eye size={20} />
                            ) : (
                                <EyeOff size={20} />
                            )}
                        </CommonButton>
                    </div>

                    <CommonButton
                        type="submit"
                        label="Update Profile"
                        variant="primary"
                        className="w-full"
                    />
                </form>
            </CommonCard>

        </div>
    );
};

export default Profile;
