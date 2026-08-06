import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import errorImg from '../assets/illustrations/error404.png';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex justify-center items-center p-4">
      <main
        style={{
          width: '390px',
          height: '844px',
          backgroundColor: 'rgba(245, 245, 245, 1)',
          opacity: 1,
        }}
        className="border border-gray-300 rounded-xl shadow-lg flex flex-col items-center justify-center p-8 overflow-hidden relative font-sans"
      >
        <div className="flex flex-col items-center justify-center -mt-10">
          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: '28px',
              lineHeight: '100%',
              color: '#000000',
            }}
            className="mb-8"
          >
            Opsss...
          </h1>

          <div className="w-[260px] h-[220px] flex justify-center items-center mb-10">
            <img
              src={errorImg}
              alt="Erro 404 - Página não encontrada"
              className="w-full h-full object-contain"
            />
          </div>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '130%',
              color: '#2B2B2B',
            }}
            className="text-center max-w-[250px]"
          >
            Infelizmente, parece que não encontramos o produto desejado.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute bottom-10 right-8 w-12 h-12 rounded-full bg-[#D9D9D9] flex items-center justify-center text-zinc-800 hover:bg-gray-300 transition-colors cursor-pointer focus:outline-none"
          aria-label="Voltar"
        >
          <FiArrowLeft size={22} />
        </button>
      </main>
    </div>
  );
}