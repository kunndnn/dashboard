import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function CommonInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
  disabled = false,
  className = "",
  icon: Icon,
  iconPosition = "left", // left or right
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
      <div className={`w-full ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors">
            {label}
          </label>
        )}
        <div className="relative">
          {/* Left Icon */}
          {Icon && iconPosition === "left" && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              <Icon size={18} />
            </div>
          )}

          <input
            type={inputType}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`
                        w-full px-4 py-2.5 rounded-lg border transition-all duration-200 outline-none
                        ${error
                ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200 dark:bg-red-900/10"
                : "border-gray-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-900/30 dark:text-gray-100"
              }
                        ${Icon && iconPosition === "left" ? "pl-10" : ""}
                        ${(Icon && iconPosition === "right") || isPassword ? "pr-10" : ""}
                        ${disabled ? "opacity-60 cursor-not-allowed bg-gray-100 dark:bg-gray-800" : ""}
                    `}
            {...props}
          />

          {/* Right Icon */}
          {Icon && iconPosition === "right" && !isPassword && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
              <Icon size={18} />
            </div>
          )}

          {/* Password Toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-1 text-sm text-red-500 animate-[fadeIn_0.2s_ease]">
            {error}
          </p>
        )}
      </div>
    );
}

/**
 * CommonInput
 * 
 * Usage:
 * <CommonInput 
 *   label="Email" 
 *   type="email" 
 *   value={email} 
 *   onChange={(e) => setEmail(e.target.value)} 
 *   placeholder="Enter your email"
 *   error={errors.email}
 *   icon={Mail}
 * />
 * 
 * Props:
 * - label: string (optional)
 * - type: string (default: "text")
 * - value: string | number
 * - onChange: function
 * - name: string
 * - placeholder: string
 * - error: string (displays error message and red styling)
 * - disabled: boolean (default: false)
 * - icon: LucideIcon (optional)
 * - iconPosition: "left" | "right" (default: "left")
 * - className: string
 */