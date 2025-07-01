import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import type { User } from "../model/user";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const LOCAL_STORAGE_KEY = "userFormData";

export default function CreateUser() {
     const navigate = useNavigate();

     const methods = useForm<User>({
          defaultValues: {
               fullname: "",
               email: "",
               password: "",
               remember: false,
          },
     });

     const { control, handleSubmit, reset, watch } = methods;
     const [showPassword, setShowPassword] = useState(false);

     useEffect(() => {
          const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (savedData) {
               reset(JSON.parse(savedData));
          }
     }, [reset]);

     const onSubmit = (data: User) => {
          if (data.remember) {
               localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
          } else {
               localStorage.removeItem(LOCAL_STORAGE_KEY);
          }
          navigate("/user", { state: data });
     };

     return (
          <div className="min-h-screen flex items-center justify-center px-4">
               <Form methods={methods} onSubmit={onSubmit}>
                    <Controller
                         name="fullname"
                         control={control}
                         render={({ field, fieldState }) => (
                              <Input
                                   label="Fullname:"
                                   value={field.value}
                                   onChange={field.onChange}
                                   error={fieldState.error?.message}
                              />
                         )}
                    />
                    <Controller
                         name="email"
                         control={control}
                         rules={{
                              required: "Email is required",
                              pattern: {
                                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                   message: "Invalid email format",
                              },
                         }}
                         render={({ field, fieldState }) => (
                              <Input
                                   label="Mail:"
                                   value={field.value}
                                   onChange={field.onChange}
                                   error={fieldState.error?.message}
                                   required
                              />
                         )}
                    />
                    <Controller
                         name="password"
                         control={control}
                         rules={{
                              required: "Password is required",
                              pattern: {
                                   value: /^[a-zA-Z0-9]+$/,
                                   message: "Password must be alphanumeric",
                              },
                         }}
                         render={({ field, fieldState }) => (
                              <Input
                                   label="Password:"
                                   type={showPassword ? 'text' : 'password'}
                                   value={field.value}
                                   onChange={field.onChange}
                                   error={fieldState.error?.message}
                                   icon={showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                   onIconClick={() => setShowPassword((prev) => !prev)}
                                   required
                              />
                         )}
                    />
                    <div className="mb-4 grid grid-cols-12 items-center">
                         <div className="col-start-4 col-span-9">
                              <Controller
                                   name="remember"
                                   control={control}
                                   render={({ field }) => (
                                        <Checkbox
                                             name="remember"
                                             checked={field.value}
                                             onChange={field.onChange}
                                        >
                                             Remember me
                                        </Checkbox>
                                   )}
                              />
                         </div>
                    </div>
                    <div className="grid grid-cols-12">
                         <div className="col-start-4 col-span-9">
                              <Button htmlType="submit" type="primary">
                                   Submit
                              </Button>
                         </div>
                    </div>
               </Form>
          </div>
     );
}