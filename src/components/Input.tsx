import React, { forwardRef, type ReactNode } from 'react';
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
     icon?: ReactNode;
     onIconClick?: () => void;
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
          icon,
          onIconClick,
     } = props;

     return (
          <div className="mb-4">
               <div className="grid grid-cols-12 items-start gap-2">
                    <label className="col-span-3 text-right pr-2 font-medium text-sm pt-2">
                         {required && <span className="text-red-500">*</span>} {label}
                    </label>
                    <div className="col-span-9 relative">
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
                         {icon && (
                              <div
                                   onClick={onIconClick}
                                   className="absolute right-2 top-1/3 -translate-y-1/2 cursor-pointer text-gray-600"
                                   style={{ zIndex: 10 }}
                                   role="button"
                                   tabIndex={0}
                                   onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onIconClick?.(); }}
                              >
                                   {icon}
                              </div>
                         )}
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
