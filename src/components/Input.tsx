import React, { forwardRef } from 'react';
import { Input as AntInput, Typography, type InputRef } from 'antd';

const { Text } = Typography;

interface InputProps {
     label?: string;
     error?: string;
     required?: boolean;
     placeholder?: string;
     type?: string;
     disabled?: boolean;
     defaultValue?: string;
     value?: string;
     onChange?: React.ChangeEventHandler<HTMLInputElement>;
     onBlur?: React.FocusEventHandler<HTMLInputElement>;
     name?: string;
}

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
     const {
          label,
          error,
          required = false,
          placeholder = '',
          type = 'text',
          disabled = false,
          defaultValue,
          value,
          onChange,
          onBlur,
          name,
     } = props;

     return (
          <div className="mb-4">
               <div className="grid grid-cols-12 items-start gap-2">
                    <label className="col-span-3 text-right pr-2 font-medium text-sm pt-2">
                         {required && <span className="text-red-500">*</span>} {label}
                    </label>

                    <div className="col-span-9">
                         <AntInput
                              name={name}
                              placeholder={placeholder}
                              type={type}
                              disabled={disabled}
                              status={error ? 'error' : ''}
                              value={value}
                              defaultValue={defaultValue}
                              onChange={onChange}
                              onBlur={onBlur}
                              ref={ref}
                         />
                         <div className="min-h-[0.75rem] mt-1">
                              {error && (
                                   <Text type="danger" className="text-sm">
                                        {error}
                                   </Text>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
});

Input.displayName = 'Input';

export default Input;
