import React from 'react';
import NavbarComponent from '../components/Navbar';

export default function Profile() {

  return (
    <>
    <NavbarComponent />
    <div className="container mt-4 d-flex flex-column align-items-center" style={{backgroundColor:"#d18005", color:"white", padding:"20px", borderRadius:"10px"}}>
      <h1 ><em>Mi Perfil</em></h1>
      <p>Bienvenido a tu perfil. Aquí puedes ver y editar tu información personal, <br/>revisar tus pedidos anteriores y gestionar tus preferencias.</p>
      <div className="d-flex flex-column align-items-center gap-3" style={{backgroundColor:"#d68e22", color:"white", padding:"20px", borderRadius:"10px"}}>
      <h4>Información Personal</h4>
      <p><strong>Nombre:</strong> Isidora Muñoz</p>
      <p><strong>Email:</strong> isidora.muñoz@example.com</p>
      </div>
      <button className="btn btn-warning mt-3">Cerrar Sesión</button>
    </div>
    </>

  );
}