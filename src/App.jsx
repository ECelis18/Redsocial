import { Routes, Route } from "react-router-dom"
import ChatPage from "./Pages/ChatPage"
import ConfiguracionPage from "./Pages/ConfiguracionPage"
import GruposPages from "./Pages/GruposPages"
import LoginPage from "./Pages/LoginPage"
import NotFoundPage from "./Pages/NotFoundPage"
import PerfilPage from "./Pages/PerfilPage"
import PrincipalPage from "./Pages/PrincipalPage"
import RegistroPage from "./Pages/RegistroPage"


export default function App() {
  return (
    <>  
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<RegistroPage />} />
      <Route path="/perfil" element={<PerfilPage />} />
      <Route path="/grupos" element={<GruposPages />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/configuracion" element={<ConfiguracionPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}



