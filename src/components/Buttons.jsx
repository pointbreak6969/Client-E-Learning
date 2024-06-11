import React from "react";

const Button = ({ fcn, name, type, color, textColor, border, hover }) => {
  return (
    <div className={`${border} px-3 py-1 ${color} ${textColor} ${hover} cursor-pointer`}>
      <button onClick={()=>{
        fcn();
      }} className="text-lg" type={type}>
        {name}
      </button>
    </div>
  );
};

export { Button };

