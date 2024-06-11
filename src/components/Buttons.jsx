import React from "react";

const Button = ({ onClick, children, className, type, disabled }) => {
  return (
    <div className={className}>
      <button className="text-lg" onClick={onClick} type={type} disabled= {disabled}>
        {children}
      </button>
    </div>
  );
};

export { Button };
