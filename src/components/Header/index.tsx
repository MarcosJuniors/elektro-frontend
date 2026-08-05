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
      {/* Header com os cantos superiores arredondados para acompanhar o molde do login */}
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

      {isMenuOpen && (
        <div className="absolute inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50 rounded-[20px]"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="relative w-1/2 bg-zinc-100 h-full flex flex-col z-10 shadow-2xl rounded-l-[20px]">
            <div className="bg-zinc-800 text-white px-4 py-3.5 flex items-center gap-3 rounded-tl-[20px]">
              <FiUser className="text-xl" />
              <span className="font-semibold text-sm">Usuário</span>
            </div>

            <nav className="flex-1 px-4 py-3 space-y-2">
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2 border-b border-zinc-200 text-zinc-800 text-xs font-medium cursor-pointer"
              >
                Editar dados
              </button>
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2 border-b border-zinc-200 text-zinc-800 text-xs font-medium cursor-pointer"
              >
                Meus pedidos
              </button>
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2 border-b border-zinc-200 text-zinc-800 text-xs font-medium cursor-pointer"
              >
                Meus produtos
              </button>
              <button
                onClick={() => handleNavigate('/error404')}
                className="w-full text-left py-2 text-zinc-800 text-xs font-medium cursor-pointer"
              >
                Meu carrinho
              </button>
            </nav>

            <div className="p-4 mt-auto">
              <button
                onClick={() => handleNavigate('/')}
                className="w-full text-left text-zinc-800 text-xs font-medium cursor-pointer"
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