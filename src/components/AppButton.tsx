import { ButtonHTMLAttributes } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

const VALIDATING_TXT = "VALIDATING...";
const VALIDATE_TXT = "VALIDATE";

const AppButton: React.FC<AppButtonProps> = ({ disabled, loading }) => {
  return (
    <button
      style={{
        opacity: disabled || loading ? 0.5 : 1,
        cursor: disabled || loading ? "not-allowed" : "auto",
      }}
      type="submit"
      className="p-4 mb-2 text-white transition-all ease-linear bg-blue-500 border rounded shadow-md"
      disabled={disabled || loading}
    >
      {loading ? VALIDATING_TXT : VALIDATE_TXT}
    </button>
  );
};
export default AppButton;
