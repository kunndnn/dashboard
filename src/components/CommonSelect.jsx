export default function CommonSelect({ label, options, onChange }) {
  return (
    <div>
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <select
        className="w-full px-3 py-2 border rounded-lg"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
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