const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-black",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  white: "bg-white hover;bg-gray-700 text-black",
  black: "bg-black hover;bg-gray-700 text-white",
};

export default function CommonButton({
  label = "Button",
  onClick = () => { },
  type = "button",
  variant = "primary",
  loading = false,
  className = "",
  disabled = false,
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
      {loading ? "Please wait..." : label}
    </button>
  );
}


// usage
//  <CommonButton
//         label="Save"
//         variant="primary"
//         onClick={() => alert("Saved!")}
//       />

//       <CommonButton
//         label="Cancel"
//         variant="secondary"
//       />

//       <CommonButton
//         label="Delete"
//         variant="danger"
//         loading={true}
//       />