import { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="">
      {label && (
        <label className="inline-block mb-1 pl-1 text-gray-700" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});
export default Input;
