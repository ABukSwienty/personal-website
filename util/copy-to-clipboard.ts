import toast from "react-hot-toast";

const copyToClipboard = (text: string, msg = "Copied!") => {
  try {
    navigator.clipboard.writeText(text);
    toast.success(msg, { duration: 2000 });
  } catch (error) {
    toast.error(msg, { duration: 2000 });
  }
};

export default copyToClipboard;
