import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import CommonButton from "./CommonButton";

export default function CommonInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error = "",
  helperText = "",
  icon = null,
  className = "",
  disabled = false,
  showPasswordToggle = false,
  wrapperClass = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={`w-full ${wrapperClass}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}

      <div
        className={`
          relative flex items-center
          border rounded-lg px-3 py-2
          ${error ? "border-red-500" : "border-gray-300"}
          ${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"}
        `}
      >
        {/* Left icon (optional) */}
        {icon && <span className="mr-2 text-gray-500">{icon}</span>}

        {/* Input Box */}
        <input
          type={
            isPassword && showPasswordToggle
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`outline-none text-sm bg-transparent w-full ${className}`}
        />

        {/* Password Toggle Icon */}
        {isPassword && showPasswordToggle && (
          <CommonButton
            onClick={() => setShowPassword((prev) => !prev)}
            variant="secondary"
            className="ml-2 px-2 py-2" // smaller padding for icon-only button
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </CommonButton>
        )}
      </div>

      {/* Helper / Error Text */}
      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}



//  <CommonInput
//         label="Username"
//         placeholder="Enter username"
//         value={data}
//         onChange={(e) => setData(e.target.value)}
//         helperText="This will appear publicly"
//       />

//       <CommonInput
//         label="Password"
//         type="password"
//         showPasswordToggle
//         placeholder="Enter password"
//       />

//       <CommonInput
//         label="Email"
//         placeholder="Enter email"
//         error="Invalid email"
//       />

//       <CommonInput
//         label="With Icon"
//         placeholder="Search..."
//         icon={<span>🔍</span>}
//       />