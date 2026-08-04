import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiPhone, FiCreditCard, FiArrowLeft } from 'react-icons/fi';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import Input from '../components/Input';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';

export default function Cadastro() {
  const navigate = useNavigate();

  // 1. Estados controlados do formulário(UseState para cada campo)
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  // Função para atualizar os campos do estado de forma dinâmica
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 2. Manipulação do envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação simples para a avaliação
    if (!formData.nome || !formData.email || !formData.senha) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Sucesso: Redireciona para a Home
    navigate('/home');
  };

  return (
    // Container externo centralizado para visualização Mobile
    <div className="min-h-screen bg-[#E5E5E5] flex justify-center items-center p-4">
      
      {/* Card principal estilo Smartphone */}
      <main className="w-full max-w-[360px] bg-[#F8F8F8] border border-gray-300 rounded-xl px-6 py-6 flex flex-col gap-5 shadow-lg min-h-[640px]">
        
        {/* Cabeçalho da página */}
        <header className="w-full pb-3 border-b border-gray-300 grid grid-cols-[auto_1fr] items-center">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-gray-800 text-xl cursor-pointer hover:opacity-75 transition-opacity"
            aria-label="Voltar para Login"
          >
            <FiArrowLeft />
          </button>
          <h1 className="text-xl font-medium text-[#2B2B2B] text-center pr-5">
            Cadastre-se
          </h1>
        </header>

        {/* Botões Sociais (FB e Google) */}
        <section className="w-full flex flex-col items-center justify-center gap-4 py-2">
          <div className="w-full flex items-center justify-between px-11">
            <SocialButton
              providerName="Facebook"
              icon={<FaFacebookF size={22} />}
            />
            <SocialButton
              providerName="Google"
              icon={<FaGoogle size={22} />}
            />
          </div>

          {/* Divisor "ou" */}
          <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-2">
            <div className="h-[1px] bg-gray-400"></div>
            <span className="text-xs text-gray-600 font-normal">ou</span>
            <div className="h-[1px] bg-gray-400"></div>
          </div>
        </section>

        {/* Formulário de Cadastro */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          
          {/* Campo Nome */}
          <Input
            type="text"
            placeholder="Nome completo"
            icon={<FiUser />}
            value={formData.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
          />

          {/* Campo CPF */}
          <Input
            type="text"
            placeholder="CPF"
            icon={<FiCreditCard />}
            value={formData.cpf}
            onChange={(e) => handleChange('cpf', e.target.value)}
          />

          {/* Campo Telefone */}
          <Input
            type="tel"
            placeholder="Telefone"
            icon={<FiPhone />}
            value={formData.telefone}
            onChange={(e) => handleChange('telefone', e.target.value)}
          />

          {/* Campo E-mail */}
          <Input
            type="email"
            placeholder="E-mail"
            icon={<FiMail />}
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />

          {/* Campo Senha */}
          <Input
            type="password"
            placeholder="Senha"
            icon={<FiLock />}
            value={formData.senha}
            onChange={(e) => handleChange('senha', e.target.value)}
          />

          {/* Campo Confirmar Senha */}
          <Input
            type="password"
            placeholder="Confirmar senha"
            icon={<FiLock />}
            value={formData.confirmarSenha}
            onChange={(e) => handleChange('confirmarSenha', e.target.value)}
          />

          {/* Botão Cadastrar-se */}
          <div className="flex justify-center mt-3">
            <Button type="submit">
              Cadastrar-se
            </Button>
          </div>

        </form>

        {/* Link auxiliar de Login */}
        <footer className="flex justify-center mt-auto pt-2">
          <Link
            to="/login"
            className="text-xs text-[#0085FF] underline font-normal hover:opacity-80 transition-opacity"
          >
            Já possui cadastro? Entre!
          </Link>
        </footer>

      </main>
    </div>
  );
}