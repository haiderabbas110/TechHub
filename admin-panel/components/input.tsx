import { CustomInputsProps } from "@/types/index";
const Input = ({
  type,
  value,
  placeholder,
  cssClass,
  id,
  name,
}: CustomInputsProps) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={cssClass}
      id={id}
      name={name}
    />
  );
};
export default Input;
