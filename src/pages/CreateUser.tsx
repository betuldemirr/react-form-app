import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Form from "../components/Form";

const CreateUser: React.FC = () => {
     const [formData, setFormData] = useState({
          fullname: "",
          email: "",
          password: "",
          remember: false,
     });

     const [errors, setErrors] = useState({
          email: "",
          password: "",
     });

     const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value, type, checked } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: type === "checkbox" ? checked : value,
          }));

          if (errors[name as keyof typeof errors]) {
               setErrors((prev) => ({ ...prev, [name]: "" }));
          }
     };

     const onSubmit = (e: React.FormEvent) => {
          e.preventDefault();

          const newErrors = {
               email: formData.email ? "" : "Please enter your email!",
               password: formData.password ? "" : "Please enter your password!",
          };

          setErrors(newErrors);

          const hasErrors = Object.values(newErrors).some((val) => val !== "");
          if (hasErrors) return;

          console.log("Form submitted:", formData);
     };

     return (
          <div className="min-h-screen flex items-center justify-center px-4">
               <Form onSubmit={onSubmit}>
                    <Input
                         label="Fullname:"
                         name="fullname"
                         value={formData.fullname}
                         onChange={onInputChange}
                    />
                    <Input
                         label="Mail:"
                         name="email"
                         value={formData.email}
                         onChange={onInputChange}
                         error={errors.email}
                    />
                    <Input
                         label="Password:"
                         name="password"
                         value={formData.password}
                         onChange={onInputChange}
                         error={errors.password}
                         type="password"
                    />
                    <div className="mb-4">
                         <Checkbox
                              name="remember"
                              checked={formData.remember}
                              onChange={(e) =>
                                   setFormData((prev) => ({
                                        ...prev,
                                        remember: e.target.checked,
                                   }))
                              }
                         >
                              Remember me
                         </Checkbox>
                    </div>
                    <Button type="primary" htmlType="submit">
                         Submit
                    </Button>
               </Form>
          </div>
     );
};

export default CreateUser;
