import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import { Home } from '../pages/Home';
import Error404 from '../pages/Error404';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão: redireciona a raiz para /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Rotas das páginas de autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rota principal da aplicação */}
        <Route path="/home" element={<Home />} />

        {/* Rota para páginas não implementadas ou não encontradas */}
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}