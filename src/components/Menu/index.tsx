interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-start">
      <div className="w-[280px] h-full bg-[#27272A] text-white p-6 relative flex flex-col">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl focus:outline-none cursor-pointer"
          aria-label="Fechar menu"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-8 pt-2">
          <img
            src="/favicon.png"
            alt="Elektro Logo"
            style={{
              width: '78px',
              height: '24px',
              opacity: 1,
            }}
            className="object-contain"
          />
        </div>

        <nav className="flex flex-col gap-4 text-sm font-medium">
          <a href="#" className="hover:text-[#FFAE50] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#FFAE50] transition-colors">
            Categorias
          </a>
          <a href="#" className="hover:text-[#FFAE50] transition-colors">
            Minha Conta
          </a>
          <a href="#" className="hover:text-[#FFAE50] transition-colors">
            Carrinho
          </a>
        </nav>
      </div>
    </div>
  );
}