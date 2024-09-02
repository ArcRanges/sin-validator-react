import { FormHTMLAttributes } from "react";

interface AppFormProps extends FormHTMLAttributes<HTMLFormElement> {
  loading: boolean;
  successMessage: string;
  errorMessage: string;
}

const AppForm: React.FC<AppFormProps> = ({
  children,
  errorMessage,
  successMessage,
  loading,
  onSubmit,
  ...restProps
}) => {
  return (
    <form onSubmit={onSubmit} {...restProps}>
      <div className="flex flex-col justify-center">{children}</div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </form>
  );
};

export default AppForm;
