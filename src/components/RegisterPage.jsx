import React, { useState } from "react";

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
        <form className="loginForm bg-dark text-white" onSubmit={(evento) => handleSubmit(evento)}>
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
            <button className="btn btn-light m-3" type="submit">Registrarse</button>

        </form>
    );
}