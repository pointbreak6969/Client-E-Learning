import { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input(
  { lable, type = "text", className = "", ...props },
  ref
) {
  return (
    <div className="w-full">
      {lable && (
        <lable className="inline-block mb-1 pl-1" htmlFor={useId()}>
          {lable}
        </lable>
      )}
      <input
        type={type}
        className={`${className}`}
        ref={ref}
        {...props}
        id={useId()}
      />
    </div>
  );
});
export default Input;
