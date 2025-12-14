export default function CommonSelect({ label, options, onChange }) {
  return (
    <div>
      {label && (
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <select
        className="
          w-full px-3 py-2 rounded-lg border
          bg-white text-gray-900 border-gray-300
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
        "
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option
            key={o.value}
            value={o.value}
            className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
          >
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}



// usage
//  const [country, setCountry] = useState("");

//   const countryOptions = [
//     { value: "india", label: "India" },
//     { value: "usa", label: "USA" },
//     { value: "uk", label: "United Kingdom" },
//   ];

//   return (
//     <div className="p-10">
//       <CommonSelect
//         label="Select Country"
//         options={countryOptions}
//         onChange={setCountry}
//       />

//       <p className="mt-4">Selected country: {country}</p>
//     </div>
//   );