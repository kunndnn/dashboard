export function Tabs({ tabs, active, onChange }) {
    return (
      <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
              <button
                  key={tab}
              className={`px-4 py-2 font-medium bg-transparent transition-all duration-300
            ${active === tab
                      ? "border-b-2 border-blue-600 text-blue-600 dark:text-blue-400"
                      : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
              onClick={() => onChange(tab)}
          >
              {tab}
          </button>
      ))}
      </div>
  );
}

/**
 * Tabs
 * 
 * Usage:
 * const [activeTab, setActiveTab] = useState('Home');
 * 
 * <Tabs 
 *   tabs={['Home', 'Profile', 'Settings']} 
 *   active={activeTab} 
 *   onChange={setActiveTab} 
 * />
 * 
 * Props:
 * - tabs: Array<string> (list of tab names)
 * - active: string (currently active tab name)
 * - onChange: function (tabName) => void
 */
