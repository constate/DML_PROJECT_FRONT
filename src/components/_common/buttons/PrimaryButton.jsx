export const PrimaryButton = ({
  children,
  disabled,
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-full py-3 px-4 rounded-lg text-white font-semibold text-base transition-colors duration-200
          ${
            disabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#06402b] hover:bg-[#0a5f40] active:bg-[#032818]"
          }
          ${className}`}
    >
      {children}
    </button>
  );
};
