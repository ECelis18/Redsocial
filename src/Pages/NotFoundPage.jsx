import React from 'react'
import svg from "../assets/404.svg";
import "../assets/styles.css"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <>
            <div className="cont-404">
                <img src={svg} alt="svg" />
                <button><Link to="/">Back to Home</Link></button>
            </div>
        </>
    )
}
