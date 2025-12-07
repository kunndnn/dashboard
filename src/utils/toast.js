import { toast } from "react-toastify";

// Prevent duplicates by using specific toastId
export const showSuccess = (message, id = "success-toast") => {
  toast.dismiss(id); // remove old toast with same ID
  toast.success(message, { toastId: id });
};

export const showError = (message, id = "error-toast") => {
  toast.dismiss(id);
  toast.error(message, { toastId: id });
};

export const showInfo = (message, id = "info-toast") => {
  toast.dismiss(id);
  toast.info(message, { toastId: id });
};

export const showWarning = (message, id = "warn-toast") => {
  toast.dismiss(id);
  toast.warn(message, { toastId: id });
};
