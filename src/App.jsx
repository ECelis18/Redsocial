import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react'
import ChatPage from "./Pages/ChatPage"
import ConfiguracionPage from "./Pages/ConfiguracionPage"
import GruposPages from "./Pages/GruposPages"
import LoginPage from "./Pages/LoginPage"
import NotFoundPage from "./Pages/NotFoundPage"
import PerfilPage from "./Pages/PerfilPage"
import PrincipalPage from "./Pages/PrincipalPage"
import RegistroPage from "./Pages/RegistroPage"


export default function App() {
  let [isAuthenticate, setIsAuthenticate] = useState(false);
  let handleLogin = () => {
    setIsAuthenticate(true); //Especie de token de acceso
  };
  let handleLogout = () => {
    setIsAuthenticate(false);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={isAuthenticate ? <Navigate to="/principal" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/registro" element={isAuthenticate ? <Navigate to="/principal" /> : <RegistroPage />} />
        <Route path="/principal" element={isAuthenticate ? <PrincipalPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/grupos" element={<GruposPages />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}



