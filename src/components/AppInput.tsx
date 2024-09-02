import { ChangeEvent, InputHTMLAttributes } from "react";

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const AppInput: React.FC<AppInputProps> = ({
  disabled,
  onChange,
  ...restProps
}) => {
  return (
    <input
      className="p-4 mb-4 border rounded shadow-md"
      onChange={onChange}
      disabled={disabled}
      {...restProps}
    />
  );
};
export default AppInput;
