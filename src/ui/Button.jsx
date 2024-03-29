import React from "react";
import cn from "../utils/cn";
import { forwardRef } from "react";

const Button = forwardRef(({ children, variant, className, ...rest }, ref) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "primary":
        return "btn-primary";

      case "outline":
        return "btn-outline";

      case "xs":
        return "btn-xs";

      default:
        return "btn-primary";
    }
  };
  return (
    <button ref={ref} {...rest} className={cn(getVariant(variant), className)}>
      {children}
    </button>
  );
});

export default Button;
