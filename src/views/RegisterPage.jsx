import React, { useState } from "react";
import NavbarComponent from "../components/Navbar";


export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if(password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
        }else if(password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
        }else{
            console.log("Estoy enviando el registro");
            alert("Cuenta creada exitosamente");
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    return (
        <>
        <NavbarComponent />
        <form className="loginForm m-5 d-flex flex-column align-items-center" style={{backgroundColor: "#ffa366", padding:"20px", borderRadius:"10px"}} onSubmit={(evento) => handleSubmit(evento)}>
            <h2 className="mt-3">Crear una Cuenta</h2>
            <label htmlFor="email">Ingrese su correo electrónico</label>
            <br />
            <input type="email" className="rounded" placeholder="ejemplo@email.com" value={email} onChange={(evento) => setEmail(evento.target.value)} />
            <br />
            <label htmlFor="password">Ingrese su contraseña</label>
            <br />
            <input type="password" className="rounded" placeholder="******" value={password} onChange={(evento) => setPassword(evento.target.value)} />
            <br />
            <label htmlFor="confirmPassword">Confirme su contraseña</label>
            <br />
            <input type="password" className="rounded" placeholder="******" value={confirmPassword} onChange={(evento) => setConfirmPassword(evento.target.value)} />
            <br />
            <button className="btn btn-dark m-3" type="submit">Registrarse</button>

        </form>
        </>
    );
}