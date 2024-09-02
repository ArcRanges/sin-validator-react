import AppInput, { AppInputProps } from "./AppInput";

interface AppPasswordInputProps {
  toggleView: () => void;
  inputProps: AppInputProps;
}

interface IconProps {
  onClick: () => void;
}

const EyeIcon = ({ onClick }: IconProps) => (
  <i className="text-2xl cursor-pointer uil uil-eye" onClick={onClick}></i>
);
const EyeSlashIcon = ({ onClick }: IconProps) => (
  <i
    className="text-2xl cursor-pointer uil uil-eye-slash"
    onClick={onClick}
  ></i>
);

const AppPasswordInput: React.FC<AppPasswordInputProps> = ({
  toggleView,
  inputProps,
}) => {
  const Icon = inputProps.type === "password" ? EyeIcon : EyeSlashIcon;

  return (
    <div className="relative w-full">
      <div className="absolute text-2xl right-3 uil top-3">
        <Icon onClick={toggleView} />
      </div>

      <AppInput {...inputProps} />
    </div>
  );
};

export default AppPasswordInput;
