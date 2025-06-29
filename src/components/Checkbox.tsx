import { Checkbox as AntCheckbox, type CheckboxChangeEvent } from "antd";

type CheckboxProps = {
     name: string;
     checked: boolean;
     onChange: (e: CheckboxChangeEvent) => void;
     children?: React.ReactNode;
};

const Checkbox = ({ name, checked, onChange, children }: CheckboxProps) => {
     return (
          <AntCheckbox name={name} checked={checked} onChange={onChange}>
               {children}
          </AntCheckbox>
     );
};

export default Checkbox;
