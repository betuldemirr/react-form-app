import React from "react";
import { Input as AntInput, Typography } from "antd";

const { Text } = Typography;

type InputProps = {
     label?: string;
     name: string;
     value: string;
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
     placeholder?: string;
     type?: string;
     error?: string;
     disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
     label,
     name,
     value,
     onChange,
     placeholder = "",
     type = "text",
     error,
     disabled = false,
}) => {
     return (
          <div>
               {label && (
                    <label htmlFor={name}>
                         {label}
                    </label>
               )}
               <AntInput
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    disabled={disabled}
                    status={error ? "error" : ""}
               />
               {error && (
                    <Text type="danger">
                         {error}
                    </Text>
               )}
          </div>
     );
};

export default Input;
