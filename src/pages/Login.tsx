import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import Button from '../components/Button';
import SocialButton from '../components/SocialButton';

import logoImg from '../assets/Logo Elektro.png';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyle: React.CSSProperties = {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
  };

  const forgotPasswordStyle: React.CSSProperties = {
    width: '151px',
    height: '17px',
    opacity: 1,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '0%',
    textDecoration: 'underline',
    textDecorationStyle: 'solid',
    color: '#3F3F46',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
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
        className="border border-gray-300 rounded-xl shadow-lg flex flex-col justify-between overflow-hidden relative font-sans"
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
          className="border-b border-gray-300 flex items-center justify-between shrink-0 box-border relative z-10"
        >
          <button
            type="button"
            onClick={() => navigate('/error')}
            className="text-zinc-800 hover:text-black transition-colors focus:outline-none cursor-pointer z-10"
            aria-label="Voltar"
          >
            <FiArrowLeft size={18} />
          </button>

          <h1
            style={{
              width: '118.62890625px',
              height: '29px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(43, 43, 43, 1)',
              textAlign: 'center',
              opacity: 1,
            }}
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          >
            Entrar
          </h1>

          <div className="w-[18px]" />
        </header>

        <section className="flex flex-col items-center justify-start w-full px-8 pt-[35.05px] flex-1">
          <div
            style={{
              width: '329.9456787109375px',
              height: '329.9456787109375px',
              opacity: 1,
            }}
            className="flex justify-center items-center shrink-0 mb-4"
          >
            <img
              src={logoImg}
              alt="Logo Elektro"
              className="w-full h-full object-contain"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="w-full flex flex-col items-center"
          >
            <div
              style={{
                width: '326px',
                height: '108px',
                gap: '12px',
                opacity: 1,
              }}
              className="flex flex-col justify-between mb-4"
            >
              <div className="flex items-center gap-2 border-b border-zinc-300 pb-1.5">
                <FiMail className="text-zinc-500" size={18} />
                <input
                  type="email"
                  name="user_login_email_field"
                  autoComplete="new-password"
                  placeholder="Digite seu..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent"
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 border-b border-zinc-300 pb-1.5">
                  <FiLock className="text-zinc-500" size={18} />
                  <input
                    type="password"
                    name="user_login_password_field"
                    autoComplete="new-password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                    className="w-full bg-transparent text-zinc-800 placeholder-zinc-400 focus:outline-none focus:bg-transparent"
                  />
                </div>

                <a
                  href="#"
                  style={forgotPasswordStyle}
                  className="mt-1 self-end flex items-center justify-end hover:opacity-80 transition-opacity"
                >
                  Esqueci minha senha
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <Button type="submit">
                Entrar
              </Button>
            </div>
          </form>
        </section>

        <footer className="w-full flex flex-col items-center px-6 pb-8 shrink-0">
          <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
          <div className="h-[1.5px] bg-[#2B2B2B]" />
             <span className="text-xs text-[#2B2B2B] font-medium">
               ou
             </span>
          <div className="h-[1.5px] bg-[#2B2B2B]" />
          </div>

          <div className="w-full flex items-center justify-between px-11 mb-6">
            <SocialButton
              providerName="Facebook"
              icon={<FaFacebookF size={22} />}
            />

            <SocialButton
              providerName="Google"
              icon={<FaGoogle size={22} />}
            />
          </div>

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