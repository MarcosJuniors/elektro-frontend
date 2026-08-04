import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão: redireciona a raiz para /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Rotas das páginas de autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* As rotas de Home, Menu e 404 entrarem aqui nas próximas etapas */}
      </Routes>
    </BrowserRouter>
  );
}