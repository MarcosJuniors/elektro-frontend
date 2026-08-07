import { useState } from 'react';

interface ProductCardProps {
  name: string;
  price?: string;
  image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '189px',
        borderRadius: '15.13px',
        padding: '9.46px',
        gap: '15px',
        opacity: 1,
      }}
      className="bg-[#F8F8F8] flex flex-col justify-between shadow-sm border border-zinc-200/60 box-border overflow-hidden"
    >
      {/* Container da Imagem */}
      <div className="w-full h-[110px] bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shrink-0">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Nome, Preço e Coração */}
      <div className="flex items-end justify-between px-0.5 w-full">
        <div className="flex flex-col">
          <p className="text-[15px] text-zinc-500 font-medium leading-tight truncate max-w-[100px]">
            {name}
          </p>
          <p className="text-xs font-bold text-zinc-900 mt-0.5">
            {price}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className="cursor-pointer p-0.5 focus:outline-none transition-transform active:scale-90"
          aria-label="Favoritar produto"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isFavorite ? '#000000' : 'none'}
            stroke="#000000"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
}