import { LabelHTMLAttributes } from "react";

interface AppInputLabelProps extends LabelHTMLAttributes<any> {
  text: string;
}
const AppInputLabel: React.FC<AppInputLabelProps> = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="mb-4">
      {text}
    </label>
  );
};
export default AppInputLabel;
