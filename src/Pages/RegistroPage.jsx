import NavbarLR from "../components/NavbarLR"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function RegistroPage() {
    return (
        <>
            <NavbarLR />

            {/* <!-- Contenido --> */}
            <div className="w3-container w3-content" style={{ maxWidth: "550px", marginTop: "80px", marginBottom: "80px" }}>
                <div className="w3-card-4 w3-round-xlarge w3-white">
                    <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
                        <h2 className="w3-center">Crear cuenta</h2>
                    </div>

                    <form className="w3-container" style={{ padding: "30px 40px 40px 40px" }}>
                        {/* Nombre completo */}
                        <div className="w3-section">
                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                                <i className="fa fa-user w3-margin-right"></i> Nombre completo
                            </label>
                            <input
                                className="w3-input w3-border w3-round"
                                type="text"
                                placeholder="Juan Pérez"
                                required
                                style={{ padding: "12px" }}
                            />
                        </div>

                        {/* Correo electrónico */}
                        <div className="w3-section">
                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                                <i className="fa fa-envelope w3-margin-right"></i> Correo electrónico
                            </label>
                            <input
                                className="w3-input w3-border w3-round"
                                type="email"
                                placeholder="tu@email.com"
                                required
                                style={{ padding: "12px" }}
                            />
                        </div>

                        {/* Contraseña */}
                        <div className="w3-section">
                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                                <i className="fa fa-lock w3-margin-right"></i> Contraseña
                            </label>
                            <input
                                className="w3-input w3-border w3-round"
                                type="password"
                                placeholder="********"
                                required
                                style={{ padding: "12px" }}
                            />
                        </div>

                        {/* Fecha de nacimiento */}
                        <div className="w3-section">
                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                                <i className="fa fa-calendar w3-margin-right"></i> Fecha de nacimiento
                            </label>
                            <input
                                className="w3-input w3-border w3-round"
                                type="date"
                                defaultValue="1990-01-01"
                                style={{ padding: "12px" }}
                            />
                        </div>

                        {/* Género */}
                        <div className="w3-section">
                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                                <i className="fa fa-venus-mars w3-margin-right"></i> Género
                            </label>
                            <select
                                className="w3-select w3-border w3-round"
                                style={{ padding: "12px" }}
                                defaultValue=""
                            >
                                <option value="" disabled>Selecciona</option>
                                <option>Hombre</option>
                                <option>Mujer</option>
                                <option>Otro</option>
                            </select>
                        </div>

                        {/* Botón Registrarse */}
                        <div className="w3-section" style={{ marginTop: "30px" }}>
                            <button
                                className="w3-button w3-theme-d2 w3-round w3-block"
                                style={{ padding: "14px", fontSize: "16px", fontWeight: "bold" }}
                            >
                                <i className="fa fa-user-plus"></i> Registrarse
                            </button>
                        </div>

                        {/* Enlace a login */}
                        <div style={{ marginTop: "25px" }}>
                            <p className="w3-center">
                                ¿Ya tienes cuenta? <Link to="/login" style={{ textDecoration: "none" }}>Inicia sesión</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}