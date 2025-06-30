import React from "react";
import { Card as AntCard } from "antd";

interface CardProps {
     title?: string;
     children: React.ReactNode;
     className?: string;
};

const Card = ({ title, children, className = "" }: CardProps) => {
     return (
          <AntCard title={title} className={`shadow-md rounded-md ${className}`}>
               {children}
          </AntCard>
     );
};

export default Card;