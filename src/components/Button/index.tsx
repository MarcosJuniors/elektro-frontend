interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-[188px] h-[40px] bg-[#2B2B2B] text-white text-sm font-medium rounded-full hover:bg-black transition-colors cursor-pointer flex items-center justify-center"
    >
      {children}
    </button>
  );
}

export default Button;

