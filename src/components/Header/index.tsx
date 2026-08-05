import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Header Principal */}
      <header className="bg-zinc-800 text-white px-4 py-3.5 flex items-center justify-between relative z-20 rounded-t-[20px]">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-xl focus:outline-none cursor-pointer"
          aria-label="Abrir menu"
        >
          <FiMenu />
        </button>

        <button
          onClick={() => navigate('/error404')}
          className="text-white text-xl focus:outline-none cursor-pointer"
          aria-label="Carrinho de compras"
        >
          <FiShoppingCart />
        </button>
      </header>

      {/* Modal / Overlay do Menu Hambúrguer */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-50 flex overflow-hidden rounded-[20px]">
          {/* Overlay escuro do lado direito */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Container do Menu Lateral */}
          <div className="relative w-[42%] bg-zinc-100 h-full flex flex-col z-10 shadow-xl">
            {/* Cabeçalho do Menu (Usuário) */}
            <div className="bg-zinc-800 text-white px-3.5 py-3.5 flex items-center gap-2.5">
              <FiUser className="text-lg" />
              <span className="font-semibold text-xs tracking-wide">Usuário</span>
            </div>

            {/* Links de Navegação */}
            <nav className="flex-1 px-3 py-2 flex flex-col">
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2.5 border-b border-zinc-300 text-zinc-800 text-[11px] font-medium cursor-pointer"
              >
                Editar dados
              </button>
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2.5 border-b border-zinc-300 text-zinc-800 text-[11px] font-medium cursor-pointer"
              >
                Meus pedidos
              </button>
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2.5 border-b border-zinc-300 text-zinc-800 text-[11px] font-medium cursor-pointer"
              >
                Meus produtos
              </button>
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2.5 text-zinc-800 text-[11px] font-medium cursor-pointer"
              >
                Meu carrinho
              </button>
            </nav>

            {/* Opção de Sair no Rodapé */}
            <div className="px-3 pb-5 pt-2 mt-auto">
              <button
                onClick={() => handleNavigate('/')}
                className="w-full text-left text-zinc-800 text-[11px] font-semibold cursor-pointer"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}