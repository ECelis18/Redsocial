import NavbarLR from "../components/NavbarLR"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function RegistroPage() {
    let { register, handleSubmit, watch, formState: { errors } } = useForm();
    let contra = watch("contrasena");
    let navigate = useNavigate();

    let onSubmited = async (data) => {
        console.log("Datos del formulario");
        console.log(data);
        try {
            let respuesta = await axios.post("http://localhost/redsocial-Api/registro", {
                nombre: data.nombre,
                correo: data.correo,
                contrasena: data.contrasena,
                fechaNacimiento: data.fechaNacimiento,
                genero: data.genero
            });
            navigate("/Login");
            console.log("Respuesta del servidor");
            console.log(respuesta);

        } catch (error) {
            console.log(error);

        }
    };
    return (
        <>
            <NavbarLR />

            {/* <!-- Contenido --> */}
            <div className="w3-container w3-content" style={{ maxWidth: "550px", marginTop: "80px", marginBottom: "80px" }}>
                <div className="w3-card-4 w3-round-xlarge w3-white">
                    <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
                        <h2 className="w3-center">Crear cuenta</h2>
                    </div>

                    <form className="w3-container" style={{ padding: "30px 40px 40px 40px" }} onSubmit={handleSubmit(onSubmited)}>
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
                                {...register("nombre", { required: true })}
                            />
                            {errors.nombre && <p className='text-danger'>Debes escribir un nombre</p>}
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
                                {...register("correo", { required: true })}
                            />
                            {errors.correo && <p className='text-danger'>Debes escribir un correo</p>}
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
                                {...register("contrasena", { required: true })}
                            />
                            {errors.contrasena && <p className='text-danger'>La contraseña es obligatoria</p>}
                        </div>
                        {/* Conformar Contraseña */}
                        <div className="w3-section">
                            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
                                <i className="fa fa-lock w3-margin-right"></i> Confirmar contraseña
                            </label>
                            <input
                                className="w3-input w3-border w3-round"
                                type="password"
                                placeholder="********"
                                required
                                style={{ padding: "12px" }}
                                {...register("confirmarContrasena",
                                    {
                                        required: "Por favor digita una contraseña",
                                        validate: (value) => value == contra || "La contraseña no coincide"
                                    })}
                            />
                            {errors.confirmarContrasena && <p className='text-danger'>{errors.confirmarContrasena.message}</p>}
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
                                {...register("fechaNacimiento", { required: true })}
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
                                {...register("genero", { required: true })}
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
                                type="submit"
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