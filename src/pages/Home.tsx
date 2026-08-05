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

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex justify-center items-center p-4">

      <main className="relative w-full max-w-[360px] bg-[#F8F8F8] border border-gray-300 rounded-xl shadow-lg min-h-[640px] overflow-y-auto">

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
              className="w-5 h-5 object-contain"
            />

            <h1 className="text-lg font-bold text-[#FFAE50]">
              Bem-vindo à Elektro!
            </h1>
          </div>


          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={bannerImg}
              alt="Banner Principal"
              className="w-full h-auto object-cover"
            />
          </div>


          <section className="space-y-2">
            <h2 className="font-bold text-xs text-zinc-800">
              Categorias Elektro
            </h2>

            <div className="grid grid-cols-4 gap-2">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-200 bg-white flex items-center justify-center">

                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain"
                    />

                  </div>

                  <span className="text-[9px] font-medium text-zinc-600 leading-tight">
                    {cat.name}
                  </span>

                </div>
              ))}
            </div>
          </section>


          <hr className="border-zinc-200" />


          <section>
            <h2 className="font-bold text-xs text-zinc-800">
              Para você
            </h2>

            <div className="grid grid-cols-2 gap-2.5 mt-2">
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


          <hr className="border-zinc-200" />


          <section>
            <h2 className="font-bold text-xs text-zinc-800">
              Produtos em destaque
            </h2>

            <div className="grid grid-cols-2 gap-2.5 mt-2">
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


          <hr className="border-zinc-200" />


          <section>
            <h2 className="font-bold text-xs text-zinc-800">
              Mais vendidos
            </h2>

            <div className="grid grid-cols-2 gap-2.5 mt-2">
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