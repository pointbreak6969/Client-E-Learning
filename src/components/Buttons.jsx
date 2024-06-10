import React from "react";

const Button = ({ fcn, name, color, textColor, border, hover }) => {
  return (
    <div className={`${border} px-3 py-1 ${color} ${textColor} ${hover} cursor-pointer`}>
      <button type={fcn} className="text-lg">
        {name}
      </button>
    </div>
  );
};

export { Button };

