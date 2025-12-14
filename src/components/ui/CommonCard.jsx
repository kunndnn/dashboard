export default function CommonCard({ title, children, className = "" }) {
    return (
      <div className={`bg-white shadow rounded-lg p-6 ${className}`}>
          {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
          {children}
      </div>
  );
}

/**
 * CommonCard
 * 
 * Usage:
 * <CommonCard title="Card Title">
 *   <p>Card content goes here.</p>
 * </CommonCard>
 * 
 * Props:
 * - title: string (optional)
 * - children: ReactNode (content)
 * - className: string
 */
