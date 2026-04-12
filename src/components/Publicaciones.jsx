import React from 'react'
import { useState } from 'react'

export default function Publicaciones(props) {
    return (
        <>
            <div>
                {props.publicaciones.map(publicacion => {
                    // Cada publicación tiene su propio estado para el comentario
                    const [textoComentario, setTextoComentario] = useState('')

                    return (
                        <div className="w3-container w3-card w3-white w3-round w3-margin" key={publicacion.id} style={{ paddingBottom: "15px" }}><br />
                            <img src={publicacion.perfil} alt="Avatar"
                                className="w3-left w3-circle w3-margin-right" style={{ width: "60px" }} />
                            <span className="w3-right w3-opacity">{publicacion.tiempo}</span>
                            <h4>{publicacion.autor}</h4><br />
                            <hr className="w3-clear" />
                            <p>{publicacion.contenido}</p>
                            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                                {publicacion.imagenes.map((imagen, i) => (
                                    <div key={i} className={publicacion.imagenes.length === 1 ? "w3-col m12" : "w3-col m6"}>
                                        <img src={imagen} style={{ width: "100%" }} alt="Imagen" className="w3-margin-bottom" />
                                    </div>
                                ))}
                            </div>


                            {/* Botón Like */}
                            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"
                                onClick={() => props.Like(publicacion.id)}>
                                <i className="fa fa-thumbs-up"></i> Like
                            </button>
                            <span className='w3-margin-left'>{publicacion.likes} likes</span>

                            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                <input
                                    className="w3-input w3-border"
                                    type="text"
                                    placeholder="Escribe un comentario..."
                                    style={{ flex: 1 }}
                                    value={textoComentario}
                                    onChange={(e) => setTextoComentario(e.target.value)}
                                />
                                <button
                                    className="w3-button w3-theme-d2"
                                    onClick={() => {
                                        if (textoComentario.trim() !== '') {
                                            props.verComentario(publicacion.id, textoComentario)
                                            setTextoComentario('')
                                        }
                                    }}>
                                    Enviar
                                </button>
                            </div>

                            {/* Mostrar comentarios existentes */}
                            {publicacion.comentarios.length > 0 && (
                                <div className="w3-margin-top">
                                    {publicacion.comentarios.map((comentario, idx) => (
                                        <div key={idx} className="w3-panel w3-light-grey w3-leftbar">
                                            <strong>{comentario.autor}</strong> - {comentario.tiempoCom}
                                            <p>{comentario.texto}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>


            {/* <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar"
                    className="w3-left w3-circle w3-margin-right" style={{ width: "60px" }} />
                <span className="w3-right w3-opacity">1 min</span>
                <h4>John Doe</h4><br />
                <hr className="w3-clear" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.</p>
                <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                    <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: "100%" }} alt="Northern Lights"
                            className="w3-margin-bottom" />
                    </div>
                    <div className="w3-half">
                        <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} alt="Nature"
                            className="w3-margin-bottom" />
                    </div>
                </div>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i>
                    Like</button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>
                    Comment</button>
            </div> */}


            {/* <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
                <img src="https://www.w3schools.com/w3images/avatar6.png" alt="Avatar"
                    className="w3-left w3-circle w3-margin-right" style={{ width: "60px" }} />
                <span className="w3-right w3-opacity">32 min</span>
                <h4>Angie Jane</h4><br />
                <hr className="w3-clear" />
                <p>Have you seen this?</p>
                <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} className="w3-margin-bottom" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.</p>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up"></i>
                    Like</button>
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment"></i>
                    Comment</button>
            </div> */}
        </>
    )
}
