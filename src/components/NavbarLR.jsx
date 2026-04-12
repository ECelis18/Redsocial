export default function NavbarLR() {
    return (
        <>
            {/* <!-- Navbar (igual que en la plantilla pero con enlaces a login/registro) --> */}
            <div className="w3-top">
                <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
                    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i className="fa fa-bars"></i></a>
                    <a href="plantilla-RedSocial.html" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right"></i>Logo</a>
                    <a href="login.html" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><i className="fa fa-sign-in"></i> Iniciar sesión</a>
                    <a href="register.html" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><i className="fa fa-user-plus"></i> Registrarse</a>
                </div>
            </div>

            {/* <!-- Navbar móvil --> */}
            <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
                <a href="plantilla-RedSocial.html" className="w3-bar-item w3-button w3-padding-large">Inicio</a>
                <a href="login.html" className="w3-bar-item w3-button w3-padding-large">Iniciar sesión</a>
                <a href="register.html" className="w3-bar-item w3-button w3-padding-large">Registrarse</a>
            </div>
        </>
    )
}
