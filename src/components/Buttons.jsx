import React from "react";

const Button = ({children, type = "button", className = "", ...props}) => {
  return (
    <button className={` px-3 py-1 ${className}`} {...props}>
      {children}
    </button>
  );
};

export { Button };
