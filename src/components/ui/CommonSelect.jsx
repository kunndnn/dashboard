import { ChevronDown } from "lucide-react";

export default function CommonSelect({ label, options, value, onChange, className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 transition-colors">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 appearance-none transition-all duration-200 cursor-pointer"
        >
          <option value="" disabled>Select an option</option>
          {options.map((option) => (
            <option key={option?.value ?? ''} value={option?.value ?? ''}>
              {option?.label ?? ''}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}

/**
 * CommonSelect
 * 
 * Usage:
 * <CommonSelect 
 *   label="Choose Role" 
 *   value={role} 
 *   onChange={setRole} 
 *   options={[
 *     { value: 'admin', label: 'Admin' },
 *     { value: 'user', label: 'User' }
 *   ]} 
 * />
 * 
 * Props:
 * - label: string (optional)
 * - value: string | number
 * - onChange: function (value) => void
 * - options: Array<{ value: string|number, label: string }>
 * - className: string
 */