import type { ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  providerName: string;
  onClick?: () => void;
}

function SocialButton({
  icon,
  providerName,
  onClick,
}: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Entrar com ${providerName}`}
      className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2B2B2B] text-white transition hover:bg-black cursor-pointer shadow-sm"
    >
      {icon}
    </button>
  );
}

export default SocialButton;