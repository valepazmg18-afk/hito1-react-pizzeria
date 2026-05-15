import React from "react";



function Header() {
  return (
    <>  
    <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2020/05/07/23/14/pizza-5143514_640.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh", width: "100%", color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}}>
      <h1>¡Pizzería Mamma Mía!</h1>
      <p>¡Bienvenidos a la mejor pizzería de la ciudad! <br />Disfruta de nuestras deliciosas pizzas caseras a la piedra</p>
    </div>
    </>
  );
}

export default Header;