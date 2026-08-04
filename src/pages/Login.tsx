import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import Input from '../components/Input';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';

// Imagem do raio Elektro
import logoImg from '../assets/Logo Elektro.png';

export default function Login() {
  const navigate = useNavigate();

  // Estados dos inputs de e-mail e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Manipulação do submit do formuláriosSS
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    // Fundo da tela inteira centralizando o card mobile no meio do monitor
    <div className="min-h-screen bg-[#E5E5E5] flex justify-center items-center p-4">
      
      {/* Container Principal estilo Mobile utilizando CSS Grid */}
      <main className="w-full max-w-[360px] bg-[#F8F8F8] border border-gray-300 rounded-xl px-6 py-6 grid grid-rows-[auto_1fr_auto] gap-4 shadow-lg min-h-[640px]">
        
        {/* LINHA 1 (GRID): Header */}
        <header className="w-full pb-3 border-b border-gray-300 grid grid-cols-[auto_1fr] items-center">
          <button
            type="button"
            className="text-gray-800 text-xl cursor-pointer hover:opacity-75 transition-opacity"
            aria-label="Voltar"
          >
            <FiArrowLeft />
          </button>
          <h1 className="text-xl font-medium text-[#2B2B2B] text-center pr-5">
            Entrar
          </h1>
        </header>

        {/* LINHA 2 (GRID): Conteúdo Principal (Logo + Form) */}
        <section className="flex flex-col items-center justify-center w-full">
          
          {/* Logo do Raio Elektro */}
          <div className="mb-4 flex justify-center w-full">
            <img
              src={logoImg}
              alt="Logo Elektro"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Form com Grid nos campos */}
          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-4">
            
            {/* Campo E-mail */}
            <Input
              type="email"
              placeholder="Digite seu..."
              icon={<FiMail />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Campo Senha */}
            <div className="flex flex-col items-end gap-1">
              <Input
                type="password"
                placeholder="********"
                icon={<FiLock />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <a href="#" className="text-[11px] text-gray-700 underline mt-1">
                Esqueci minha senha
              </a>
            </div>

            {/* Botão Entrar */}
            <div className="flex justify-center mt-2">
              <Button type="submit">
                Entrar
              </Button>
            </div>

          </form>

        </section>

        {/* LINHA 3 (GRID): Divisor, Redes Sociais e Cadastro */}
        <footer className="w-full flex flex-col items-center">
          
          {/* Divisor "ou" */}
          <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
            <div className="h-[1px] bg-gray-400"></div>
            <span className="text-xs text-gray-600 font-normal">ou</span>
            <div className="h-[1px] bg-gray-400"></div>
          </div>

          {/* Botões Sociais */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <SocialButton
              providerName="Facebook"
              icon={<FaFacebookF size={22} />}
            />
            <SocialButton
              providerName="Google"
              icon={<FaGoogle size={22} />}
            />
          </div>

          {/* Link Cadastro */}
          <Link
            to="/cadastro"
            className="text-xs text-[#0085FF] underline font-normal hover:opacity-80 transition-opacity"
          >
            Não possui cadastro? Cadastre-se!
          </Link>

        </footer>

      </main>
    </div>
  );
}