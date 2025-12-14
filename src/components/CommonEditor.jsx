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
            />
        </div>
    );
}