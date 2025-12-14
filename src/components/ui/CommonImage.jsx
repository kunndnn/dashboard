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