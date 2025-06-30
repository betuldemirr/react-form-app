import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";

interface ButtonProps extends AntButtonProps {
     children: React.ReactNode;
     className?: string;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
     return (
          <AntButton className={className} {...props}>
               {children}
          </AntButton>
     );
};

export default Button;