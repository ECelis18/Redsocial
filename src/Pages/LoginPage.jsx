import NavbarLR from "../components/NavbarLR"
import Footer from "../components/Footer"

export default function LoginPage() {
    return (
        <>
            <NavbarLR />
            {/* <!-- Contenedor principal --> */}
            <div className="w3-container w3-content" style={{ maxWidth: "500px", marginTop: "100px" }}>
                <div className="w3-card-4 w3-round-xlarge w3-white">
                    <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
                        <h2 className="w3-center">Iniciar sesión</h2>
                    </div>
                    <form className="w3-container w3-padding-32">
                        <div className="w3-section">
                            <label><i className="fa fa-envelope"></i> Correo electrónico</label>
                            <input className="w3-input w3-border w3-round" type="email" placeholder="tu@email.com" required />
                        </div>
                        <div className="w3-section">
                            <label><i className="fa fa-lock"></i> Contraseña</label>
                            <input className="w3-input w3-border w3-round" type="password" placeholder="********" required />
                        </div>
                        <div className="w3-section">
                            <button className="w3-button w3-theme-d2 w3-round w3-block w3-section"><i className="fa fa-sign-in"></i> Acceder</button>
                        </div>
                        <p className="w3-center"><a href="#">¿Olvidaste tu contraseña?</a></p>
                        <p className="w3-center">¿No tienes cuenta? <a href="register.html">Regístrate aquí</a>.</p>
                    </form>
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}
