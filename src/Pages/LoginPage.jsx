import NavbarLR from "../components/NavbarLR"
import Footer from "../components/Footer"
import { Link, NavLink } from "react-router-dom"

export default function LoginPage() {
    return (
        <>
            <NavbarLR />
            {/* <!-- Contenedor principal --> */}
            <div className="w3-container w3-content" style={{ maxWidth: "550px", marginTop: "100px", marginBottom: "60px" }}>
                <div className="w3-card-4 w3-round-xlarge w3-white">
                    <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
                        <h2 className="w3-center">Iniciar sesión</h2>
                    </div>

                    <form className="w3-container" style={{ padding: "30px 40px 40px 40px" }}>
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

                        <div className="w3-section" style={{ marginTop: "30px" }}>
                            <button className="w3-button w3-theme-d2 w3-round w3-block" style={{ padding: "14px", fontSize: "16px", fontWeight: "bold" }}>
                                <i className="fa fa-sign-in"></i> Acceder
                            </button>
                        </div>

                        <div style={{ marginTop: "25px" }}>
                            <p className="w3-center">
                                <Link to="/recuperar" style={{ textDecoration: "none" }}>¿Olvidaste tu contraseña?</Link>
                            </p>
                            <p className="w3-center">
                                ¿No tienes cuenta? <NavLink to="/registro" style={{ textDecoration: "none" }}>Regístrate aquí</NavLink>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}