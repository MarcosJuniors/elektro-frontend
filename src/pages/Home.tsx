import { useState } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';
import { ProductCard } from '../components/ProductCard';

import bannerImg from '../assets/banners/banner.png';

import { categories } from '../data/categories';

import {
  paraVoceProducts,
  emDestaqueProducts,
  maisVendidosProducts,
} from '../data/products';

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionTitleStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#000000',
    opacity: 1,
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex justify-center items-center p-6">

      <main className="relative w-full max-w-[395px] bg-[#F8F8F8] border border-gray-300 rounded-xl shadow-lg min-h-[645px] overflow-y-auto">

        <Header onOpenMenu={() => setIsMenuOpen(true)} />

        <Menu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />

        <div className="p-4 space-y-4">

          <div className="flex items-center justify-center gap-2 pt-1">
            <img
              src="/favicon.png"
              alt="Elektro Raio"
              className="h-[42px] w-[42px] object-contain"
            />

            <h1 className="text-lg font-bold text-[#FFAE50] text-[26px]">
              Bem-vindo à Elektro!
            </h1>
          </div>

          <div className="px-2.5 mb-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img
                src={bannerImg}
                alt="Banner Principal"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Categorias Elektro */}
          <section className="space-y-2 px-2.5">
            <h2 style={sectionTitleStyle} className="mb-5 flex items-center">
              Categorias Elektro
            </h2>

            <div className="grid grid-cols-4 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-zinc-200 bg-white flex items-center justify-center">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="text-[15px] font-medium text-zinc-600 leading-tight">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Para você */}
          <section className="px-2.5">
            <h2 style={sectionTitleStyle} className="mb-2 flex items-center">
              Para você
            </h2>

            <hr className="border-zinc-300 mb-5" />

            <div className="grid grid-cols-2 gap-6 w-full">
              {paraVoceProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  name={prod.name}
                  price={prod.price}
                  image={prod.image}
                />
              ))}
            </div>
          </section>

          {/* Produtos em destaque */}
          <section className="px-2.5">
            <h2 style={sectionTitleStyle} className="mb-2 flex items-center">
              Produtos em destaque
            </h2>

            <hr className="border-zinc-300 mb-5" />

            <div className="grid grid-cols-2 gap-6 w-full">
              {emDestaqueProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  name={prod.name}
                  price={prod.price}
                  image={prod.image}
                />
              ))}
            </div>
          </section>

          {/* Mais vendidos */}
          <section className="px-2.5">
            <h2 style={sectionTitleStyle} className="mb-2 flex items-center">
              Mais vendidos
            </h2>

            <hr className="border-zinc-300 mb-5" />

            <div className="grid grid-cols-2 gap-6 w-full">
              {maisVendidosProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  name={prod.name}
                  price={prod.price}
                  image={prod.image}
                />
              ))}
            </div>
          </section>

        </div>

        <Footer />

      </main>

    </div>
  );
}