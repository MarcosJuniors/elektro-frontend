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
      <header className="bg-zinc-800 text-white px-4 py-3.5 flex items-center justify-between relative z-20 rounded-t-xl">
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
        <div className="absolute inset-0 z-50 flex pointer-events-auto rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="relative w-[50%] bg-[#F8F8F8] h-[45%] flex flex-col justify-between z-10 shadow-2xl border-r border-b border-zinc-300 rounded-l-xl rounded-b-xl">
            <div>
              <div className="bg-zinc-800 text-white px-3.5 py-3.5 flex items-center gap-2.5 rounded-tl-xl">
                <FiUser className="text-base" />
                <span className="font-semibold text-xs tracking-wide">Usuário</span>
              </div>

              <nav className="px-3 py-2 flex flex-col">
                <button
                  onClick={() => handleNavigate('/error404')}
                  className="w-full text-left py-2 border-b border-zinc-300 text-zinc-800 text-[11px] font-medium cursor-pointer"
                >
                  Editar dados
                </button>
                <button
                  onClick={() => handleNavigate('/error404')}
                  className="w-full text-left py-2 border-b border-zinc-300 text-zinc-800 text-[11px] font-medium cursor-pointer"
                >
                  Meus pedidos
                </button>
                <button
                  onClick={() => handleNavigate('/error404')}
                  className="w-full text-left py-2 border-b border-zinc-300 text-zinc-800 text-[11px] font-medium cursor-pointer"
                >
                  Meus produtos
                </button>
                <button
                  onClick={() => handleNavigate('/error404')}
                  className="w-full text-left py-2 text-zinc-800 text-[11px] font-medium cursor-pointer"
                >
                  Meu carrinho
                </button>
              </nav>
            </div>

            <div className="px-3 pb-3 pt-1">
              <button
                onClick={() => handleNavigate('/login')}
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