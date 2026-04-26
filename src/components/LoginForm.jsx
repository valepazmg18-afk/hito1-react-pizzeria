import { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChangeEmail = (evento) => {
        setEmail(evento);
    }
    const handleSubmit = (evento) => {
        evento.preventDefault();
        if(password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres");
            setEmail('');
            setPassword('');
            return;
        }
        console.log("Estoy enviando el form");
        alert("Sesión Iniciada");
        setEmail('');
        setPassword('');
    }
    return (
        <form className="LoginForm bg-dark text-white" action="" onSubmit={(evento) => handleSubmit(evento)}>
            <h2 className="mt-3">Iniciar Sesión</h2>
            
            <label htmlFor="email">Ingrese su correo electrónico</label>
            <br />
            <input type="email" className="rounded" placeholder="ejemplo@email.com" value={email} onChange={(evento) => handleChangeEmail(evento.target.value)} />
            <br />
            <label htmlFor="Contraseña">Ingrese su contraseña</label>
            <br />
            <input type="password" className="rounded" placeholder="******" value={password} onChange={(evento) => setPassword(evento.target.value)} />
            <br />
            <button className="btn btn-light m-3" type="submit">Iniciar Sesión</button>
            
        </form>
    );
}
export default LoginForm;