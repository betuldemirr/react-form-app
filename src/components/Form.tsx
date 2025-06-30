import React from 'react';
import { Form as AntForm } from 'antd';
import { FormProvider } from 'react-hook-form';
import type { UseFormReturn, FieldValues } from 'react-hook-form';

interface FormProps<T extends FieldValues> {
     methods: UseFormReturn<T>;
     onSubmit: (data: T) => void;
     children: React.ReactNode;
     className?: string;
     layout?: 'vertical' | 'horizontal' | 'inline';
};

const Form = <T extends FieldValues>({
     methods,
     onSubmit,
     children,
     className = '',
     layout = 'vertical',
}: FormProps<T>) => {
     const { handleSubmit } = methods;

     return (
          <FormProvider {...methods}>
               <AntForm
                    layout={layout}
                    className={`${className}`}
                    onFinish={handleSubmit(onSubmit)}
               >
                    {children}
               </AntForm>
          </FormProvider>
     );
};

export default Form;