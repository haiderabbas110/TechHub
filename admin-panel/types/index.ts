export interface CustomInputsProps {
  type: "text" | "number" | "email" | "password | button";
  value?: any;
  placeholder?: string;
  cssClass: string;
  id?: string;
  name: string;
  disabled?: boolean;
}
