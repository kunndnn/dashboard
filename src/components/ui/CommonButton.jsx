const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-black",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  white: "bg-white hover;bg-gray-700 text-black",
  black: "bg-black hover;bg-gray-700 text-white",
  none:""
};

export default function CommonButton({
  label = "Button",
  onClick = () => { },
  type = "button",
  variant = "primary",
  loading = false,
  className = "",
  disabled = false,
  children
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading || disabled}
      className={`
        px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer
        ${variants[variant]}
        ${loading ? "opacity-70 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {loading ? "Please wait..." : children || label}
    </button>
  );
}


/**
 * CommonButton
 * 
 * Usage:
 * <CommonButton 
 *   label="Save" 
 *   onClick={() => console.log('Saved')} 
 *   variant="primary" 
 *   loading={isLoading}
 * />
 * 
 * Props:
 * - label: string (default: "Button")
 * - onClick: function
 * - type: "button" | "submit" | "reset" (default: "button")
 * - variant: "primary" | "secondary" | "danger" | "white" | "black" | "none" (default: "primary")
 * - loading: boolean (default: false)
 * - disabled: boolean (default: false)
 * - className: string
 * - children: ReactNode (optional, overrides label)
 */