const Button = ({ children, variant = "primary", ...props }) => {
  let baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-300";
  let variantStyles = "";

  if (variant === "primary") {
    variantStyles = "bg-black text-white hover:bg-blue-500";
  } else if (variant === "compare") {
    variantStyles = "bg-blue-100  border text-black text-sm ";
  } else if (variant === "hoveredCompare") {
    variantStyles =
      "bg-white text-black border text-black text-sm hover:bg-blue-300";
  }

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
