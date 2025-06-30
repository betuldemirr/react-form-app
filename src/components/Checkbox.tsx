import { Checkbox as AntCheckbox, type CheckboxChangeEvent } from "antd";

interface CheckboxProps {
     name: string;
     checked: boolean;
     onChange: (value: boolean) => void;
     children?: React.ReactNode;
};

const Checkbox = ({ name, checked, onChange, children }: CheckboxProps) => {
     const handleChange = (e: CheckboxChangeEvent) => {
          onChange(e.target.checked);
     };

     return (
          <AntCheckbox name={name} checked={checked} onChange={handleChange}>
               {children}
          </AntCheckbox>
     );
};

export default Checkbox;