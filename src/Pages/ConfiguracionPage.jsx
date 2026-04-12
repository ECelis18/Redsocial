import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ConfiguracionPage() {
    return (
        <>
            <Navbar />
            {/* <!-- Contenido --> */}
            <div className="w3-container w3-content" style={{ maxWidth: '1000px', marginTop: '80px', marginBottom: '20px' }}>
                <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding-16 w3-theme-d2">
                        <h2><i className="fa fa-cogs"></i> Configuración de la cuenta</h2>
                    </div>

                    {/* <!-- Pestañas --> */}
                    <div className="w3-bar w3-theme-l4">
                        <button className="w3-bar-item w3-button tablink w3-theme-d1" onClick={(e) => openTab(e, 'General')}>General</button>
                        <button className="w3-bar-item w3-button tablink" onClick={(e) => openTab(e, 'Privacidad')}>Privacidad</button>
                        <button className="w3-bar-item w3-button tablink" onClick={(e) => openTab(e, 'Notificaciones')}>Notificaciones</button>
                    </div>

                    {/* <!-- Contenido de pestañas --> */}
                    <div id="General" className="w3-container tab w3-padding-24">
                        <h4>Información personal</h4>
                        <div className="w3-section">
                            <label>Nombre</label>
                            <input className="w3-input w3-border w3-round" type="text" value="Juan Pérez" />
                        </div>
                        <div className="w3-section">
                            <label>Correo electrónico</label>
                            <input className="w3-input w3-border w3-round" type="email" value="juan@email.com" />
                        </div>
                        <div className="w3-section">
                            <label>Biografía</label>
                            <textarea className="w3-input w3-border w3-round" rows="3">Diseñador UI/UX. Amante del café.</textarea>
                        </div>
                        <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-save"></i> Guardar cambios</button>
                    </div>

                    <div id="Privacidad" className="w3-container tab w3-padding-24" style={{ display: 'none' }}>
                        <h4>Privacidad y seguridad</h4>
                        <div className="w3-section">
                            <label>¿Quién puede ver tu perfil?</label>
                            <select className="w3-select w3-border w3-round">
                                <option>Todos</option>
                                <option selected>Solo amigos</option>
                                <option>Solo yo</option>
                            </select>
                        </div>
                        <div className="w3-section">
                            <label>¿Quién puede enviarte solicitudes de amistad?</label>
                            <select className="w3-select w3-border w3-round">
                                <option>Todos</option>
                                <option selected>Amigos de amigos</option>
                            </select>
                        </div>
                        <div className="w3-section">
                            <label>Cambiar contraseña</label>
                            <input className="w3-input w3-border w3-round" type="password" placeholder="Nueva contraseña" />
                        </div>
                        <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-lock"></i> Actualizar privacidad</button>
                    </div>

                    <div id="Notificaciones" className="w3-container tab w3-padding-24" style={{ display: 'none' }}>
                        <h4>Preferencias de notificaciones</h4>
                        <div className="w3-section">
                            <input className="w3-check" type="checkbox" checked /> <label>Recibir notificaciones por correo</label>
                        </div>
                        <div className="w3-section">
                            <input className="w3-check" type="checkbox" checked /> <label>Notificaciones de nuevos mensajes</label>
                        </div>
                        <div className="w3-section">
                            <input className="w3-check" type="checkbox" /> <label>Notificaciones de cumpleaños</label>
                        </div>
                        <div className="w3-section">
                            <input className="w3-check" type="checkbox" checked /> <label>Notificaciones de grupos</label>
                        </div>
                        <button className="w3-button w3-theme-d2 w3-round"><i className="fa fa-bell"></i> Guardar preferencias</button>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer />
        </>
    )
}
