import { Input as AntInput, Typography } from 'antd';
const { Text } = Typography;

interface InputProps {
     label?: string;
     value?: string;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
     placeholder?: string;
     type?: string;
     disabled?: boolean;
     error?: string;
     required?: boolean;
};

const Input: React.FC<InputProps> = ({
     label,
     value,
     onChange,
     placeholder = '',
     type = 'text',
     disabled = false,
     error,
     required = false,
}) => {
     return (
          <div className="mb-4">
               <div className="grid grid-cols-12 items-start gap-2">
                    <label className="col-span-3 text-right pr-2 font-medium text-sm pt-2">
                         {required && <span className="text-red-500">*</span>} {label}
                    </label>

                    <div className="col-span-9">
                         <AntInput
                              value={value}
                              onChange={onChange}
                              placeholder={placeholder}
                              type={type}
                              disabled={disabled}
                              status={error ? 'error' : ''}
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
};

export default Input;