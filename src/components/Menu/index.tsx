import { useNavigate } from 'react-router-dom';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <>
      {isOpen && (
        <div
          className="absolute inset-0 z-40 bg-black/20"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          absolute top-0 left-0 z-50
          w-[210px]
          h-[300px]
          bg-white
          rounded-r-xl
          shadow-lg
          overflow-hidden
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-bold text-[#FFAE50] text-sm">
            Menu
          </span>

          <button
            onClick={onClose}
            className="text-gray-600 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col gap-3 px-4 py-4 text-sm">

          <button
            className="text-left text-gray-700"
            onClick={() => handleNavigate('/editar-dados')}
          >
            Editar dados
          </button>

          <button
            className="text-left text-gray-700"
            onClick={() => handleNavigate('/meus-pedidos')}
          >
            Meus pedidos
          </button>

          <button
            className="text-left text-gray-700"
            onClick={() => handleNavigate('/meus-produtos')}
          >
            Meus produtos
          </button>

          <button
            className="text-left text-gray-700"
            onClick={() => handleNavigate('/meu-carrinho')}
          >
            Meu carrinho
          </button>

          <button
            className="text-left text-red-500"
            onClick={() => handleNavigate('/login')}
          >
            Sair
          </button>

        </nav>
      </aside>
    </>
  );
}