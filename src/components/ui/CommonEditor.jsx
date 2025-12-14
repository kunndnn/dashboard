import JoditEditor from "jodit-react";

export default function CommonEditor({ className, value, setValue, config = {
    readonly: false,
    toolbarSticky: false,
    uploader: { insertImageAsBase64URI: true },
    height: 400
} }) {
    return (
        <div className={className}>
            <JoditEditor
                value={value}
                config={config}
                onBlur={(content) => setValue(content)}
                tabIndex={1}
            />
        </div>
    );
}

/**
 * CommonEditor
 * 
 * Usage:
 * <CommonEditor 
 *   value={htmlContent} 
 *   setValue={setHtmlContent} 
 *   config={{ height: 500 }} 
 *   className="my-4"
 * />
 * 
 * Props:
 * - value: string (HTML content)
 * - setValue: function (updates state)
 * - config: object (Jodit config options, optional)
 * - className: string (optional container class)
 */