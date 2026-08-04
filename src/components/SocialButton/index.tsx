interface SocialButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

function SocialButton({
  icon,
  children,
  onClick,
}: SocialButtonProps) {
  return (
    <button onClick={onClick}>
      {icon}

      {children}
    </button>
  );
}

export default SocialButton;