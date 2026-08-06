import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#2B2B2B',
    opacity: 1,
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '0%',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#E5E5E5] flex justify-center items-center p-4">
      <main
        style={{
          width: '390px',
          height: '844px',
          backgroundColor: 'rgba(245, 245, 245, 1)',
          opacity: 1,
        }}
        className="border border-gray-300 rounded-xl shadow-lg flex flex-col overflow-hidden font-sans relative"
      >
        <header
          style={{
            width: '390px',
            height: '60px',
            opacity: 1,
            paddingTop: '10px',
            paddingRight: '32px',
            paddingBottom: '10px',
            paddingLeft: '32px',
          }}
          className="border-b border-gray-300 flex items-center justify-between shrink-0 box-border relative"
        >
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-zinc-800 hover:text-black transition-colors focus:outline-none cursor-pointer z-10"
            aria-label="Voltar"
          >
            <FiArrowLeft size={18} />
          </button>

          <h1
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(43, 43, 43, 1)',
              textAlign: 'center',
            }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            Cadastrar-se
          </h1>

          <div className="w-[18px]" />
        </header>

        <section className="flex flex-col items-center justify-start w-full px-8 pt-[74px] pb-6 flex-1">
          <div
            style={{
              width: '326px',
              height: '88.98628234863281px',
              opacity: 1,
            }}
            className="flex flex-col justify-between items-center mb-6 relative"
          >
            <div className="w-full grid grid-cols-2 justify-items-center items-center">
              <button
                type="button"
                className="w-14 h-14 rounded-full bg-[#27272A] text-white flex items-center justify-center cursor-pointer hover:bg-black transition-colors"
              >
                <FaFacebookF size={20} />
              </button>
              <button
                type="button"
                className="w-14 h-14 rounded-full bg-[#27272A] text-white flex items-center justify-center cursor-pointer hover:bg-black transition-colors"
              >
                <FaGoogle size={20} />
              </button>
            </div>

            <div className="w-full grid grid-cols-2 gap-8 items-center relative">
              <div className="h-[1.5px] bg-[#27272A] w-full" />
              <div className="h-[1.5px] bg-[#27272A] w-full" />
              <span className="absolute left-1/2 -translate-x-1/2 text-xs text-zinc-600 font-normal px-1 bg-rgba(245, 245, 245, 1)">
                ou
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            style={{ width: '327px' }}
            className="flex flex-col gap-9"
          >
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label style={labelStyle}>Nome</label>
              <input
                type="text"
                name="user_fullname_field"
                autoComplete="new-password"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={inputStyle}
                className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent mt-1"
              />
            </div>

            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label style={labelStyle}>CPF</label>
              <input
                type="text"
                name="user_cpf_field"
                autoComplete="new-password"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                style={inputStyle}
                className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent mt-1"
              />
            </div>

            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label style={labelStyle}>Telefone</label>
              <input
                type="tel"
                name="user_phone_field"
                autoComplete="new-password"
                placeholder="Digite seu telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                style={inputStyle}
                className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent mt-1"
              />
            </div>

            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label style={labelStyle}>E-mail</label>
              <input
                type="email"
                name="user_email_field"
                autoComplete="new-password"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent mt-1"
              />
            </div>

            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label style={labelStyle}>Senha</label>
              <input
                type="password"
                name="user_password_field"
                autoComplete="new-password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={inputStyle}
                className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent mt-1"
              />
            </div>

            <div className="flex flex-col border-b border-zinc-300 pb-1.5">
              <label style={labelStyle}>Confirmar sua senha</label>
              <input
                type="password"
                name="user_confirm_password_field"
                autoComplete="new-password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                style={inputStyle}
                className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent mt-1"
              />
            </div>

            <div className="flex justify-center mt-3">
              <button
                type="submit"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: 'rgba(245, 245, 245, 1)',
                }}
                className="w-48 py-2.5 bg-[#27272A] rounded-full hover:bg-black transition-colors cursor-pointer"
              >
                Cadastrar-se!
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}