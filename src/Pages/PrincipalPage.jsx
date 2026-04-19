import Navbar from '../components/Navbar'
import ColumnCentral from '../components/ColumnCentral'
import ColumnDere from '../components/ColumnDere'
import ColumnIzqu from '../components/ColumnIzqu'
import Footer from '../components/Footer'
import Publicaciones from '../components/Publicaciones'

import { useState } from 'react'

export default function PrincipalPage({ onLogout }) {

    const [publicaciones, setPublicaciones] = useState([
        {
            id: 1,
            autor: "John Doe",
            perfil: "https://www.w3schools.com/w3images/avatar2.png",
            tiempo: "1 min",
            contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imagenes: ["https://www.w3schools.com/w3images/lights.jpg", "https://www.w3schools.com/w3images/nature.jpg"],
            likes: 0,
            likeUser: false,
            comentarios: []

        },
        {
            id: 2,
            autor: "Angie Jane",
            perfil: "https://www.w3schools.com/w3images/avatar6.png",
            tiempo: "32 min",
            contenido: "Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imagenes: ["https://www.w3schools.com/w3images/nature.jpg"],
            likes: 0,
            likeUser: false,
            comentarios: []
        }
    ])

    function darLike(id) {
        setPublicaciones(publicaciones.map(publicacion => {
            if (publicacion.id === id) {
                if (publicacion.likeUser === false) {
                    return {
                        ...publicacion,
                        likeUser: true,
                        likes: publicacion.likes + 1
                    };

                } else {
                    return {
                        ...publicacion,
                        likeUser: false,
                        likes: publicacion.likes - 1
                    };
                }
            } else {
                return publicacion;
            }
        }));
    }



    function agregarComentario(id, textoComentario) {
        setPublicaciones(publicaciones.map(publicacion => {
            if (publicacion.id === id) {
                let nuevoComentario = {
                    autor: "Tú",
                    texto: textoComentario,
                    tiempoCom: new Date().toDateString()
                };

                return {
                    ...publicacion,
                    comentarios: [...publicacion.comentarios, nuevoComentario]
                };
            } else {
                return publicacion;
            }
        }));


    }



    return (
        <>
            <Navbar onLogout={onLogout} />
            < div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
                {/* <!-- The Grid --> */}
                < div className="w3-row" >
                    {/* <!-- Left Column --> */}
                    < div className="w3-col m3" >
                        <ColumnIzqu />
                    </div >
                    <div className="w3-col m7">
                        <ColumnCentral />
                        <Publicaciones publicaciones={publicaciones} Like={darLike} verComentario={agregarComentario} />

                    </div>
                    <div className="w3-col m2">
                        <ColumnDere />
                    </div>
                </div >
            </div >
            <br />
            <Footer />
        </>
    )
}
