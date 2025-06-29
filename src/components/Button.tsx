import { Button as AntButton } from "antd";

type ButtonProps = {
     children: React.ReactNode;
     htmlType?: "button" | "submit" | "reset";
     type?: "primary" | "default" | "text";
};

const Button = ({ children, htmlType = "button", type = "primary" }: ButtonProps) => {
     return (
          <AntButton type={type} htmlType={htmlType}>
               {children}
          </AntButton>
     );
};

export default Button;
