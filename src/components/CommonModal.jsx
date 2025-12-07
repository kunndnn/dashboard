export default function CommonModal({ open, onClose, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={onClose}
            />

            {/* Modal Box */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-md z-10">
                {children}
            </div>
        </div>
    );
}

// usage
// const [open, setOpen] = useState(false);

// <>
//   <button onClick={() => setOpen(true)} className="btn-primary">Open Modal</button>

//   <CommonModal open={open} onClose={() => setOpen(false)}>
//     <h2 className="text-xl font-bold mb-3">Modal Title</h2>
//     <p>Modal content goes here.</p>
//     <button onClick={() => setOpen(false)} className="mt-4 btn-secondary">
//       Close
//     </button>
//   </CommonModal>
// </>
