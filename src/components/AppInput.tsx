import { ChangeEvent, InputHTMLAttributes } from "react";
import { Mode } from "../types";

export interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
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
      className="w-full p-4 mb-4 border rounded shadow-md"
      onChange={onChange}
      disabled={disabled}
      {...restProps}
    />
  );
};
export default AppInput;
