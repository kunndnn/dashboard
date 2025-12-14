import { fallbackImage } from "@/utils/constants"

const CommonImage = ({ src, alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={(e) => e.currentTarget.src = fallbackImage}
        />
    )
}

export default CommonImage

/**
 * CommonImage
 * 
 * Usage:
 * <CommonImage 
 *   src="https://example.com/image.jpg" 
 *   alt="Description" 
 *   className="w-full h-auto rounded" 
 * />
 * 
 * Props:
 * - src: string
 * - alt: string
 * - className: string
 * 
 * Behavior:
 * - Automatically falls back to a default image (from constants) if the src fails to load.
 */