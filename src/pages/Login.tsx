import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import Input from '../components/Input';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';

// Logo utilizada na tela de login
import logoImg from '../assets/Logo Elektro.png';

export default function Login() {
  const navigate = useNavigate();

  // Estados responsáveis por armazenar os valores digitados nos campos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função chamada quando o usuário tenta entrar no sistema
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação simples para verificar se os campos foram preenchidos
    if (email.trim() && password.trim()) {
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    // Área externa da aplicação, mantendo a tela centralizada em diferentes tamanhos
    <div className="min-h-screen bg-[#E5E5E5] flex justify-center items-center p-4">
      
      {/* Container principal simulando a visualização mobile do aplicativo */}
      <main className="w-full max-w-[360px] bg-[#F8F8F8] border border-gray-300 rounded-xl px-6 py-6 grid grid-rows-[auto_1fr_auto] gap-4 shadow-lg min-h-[640px]">
        
        {/* Cabeçalho contendo o botão voltar e o título da página */}
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

        {/* Conteúdo principal da tela de login */}
        <section className="flex flex-col items-center justify-center w-full">
          
          {/* Logo da Elektro exibida acima do formulário */}
          <div className="mb-4 flex justify-center w-full">
            <img
              src={logoImg}
              alt="Logo Elektro"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Formulário responsável pela entrada do usuário */}
          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-4">
            
            {/* Campo para preenchimento do e-mail */}
            <Input
              type="email"
              placeholder="Digite seu..."
              icon={<FiMail />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Campo de senha junto com o link de recuperação */}
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

            {/* Botão que envia o formulário de login */}
            <div className="flex justify-center mt-2">
              <Button type="submit">
                Entrar
              </Button>
            </div>

          </form>

        </section>

        {/* Parte inferior com login social e direcionamento para cadastro */}
        <footer className="w-full flex flex-col items-center">
          
          {/* Separador visual entre login tradicional e redes sociais */}
          <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
            <div className="h-[1px] bg-gray-400"></div>

            <span className="text-xs text-gray-600 font-normal">
              ou
            </span>

            <div className="h-[1px] bg-gray-400"></div>
          </div>

          {/* Botões de autenticação pelas redes sociais */}
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

          {/* Link para acessar a tela de cadastro */}
          <Link
            to="/cadastro"
            className="text-xs text-[#3e1481] underline font-normal hover:opacity-80 transition-opacity"
          >
            Não possui cadastro? Cadastre-se!
          </Link>

        </footer>

      </main>
    </div>
  );
}