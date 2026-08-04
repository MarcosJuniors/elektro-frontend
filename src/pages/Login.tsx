import logoElektro from "../assets/Logo Elektro.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import Input from "../components/Input";
import SocialButton from "../components/SocialButton";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (email !== "" && senha !== "") {
      navigate("/home");
    }
  }

  return (
    <main>

    <img
      src={logoElektro}
      alt="Logo Elektro"
    />


      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        type="password"
        placeholder="Digite sua senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />

      <button>
        Esqueci minha senha
      </button>

      <Button onClick={handleLogin}>
        Entrar
      </Button>

      <div>
        <span>ou</span>
      </div>

      <SocialButton icon={null}>
        Google
      </SocialButton>

      <SocialButton icon={null}>
        Facebook
      </SocialButton>

      <p>
        Não possui cadastro?
      </p>

      <button
        onClick={() => navigate("/cadastro")}
      >
        Cadastre-se!
      </button>

    </main>
  );
}

export default Login;