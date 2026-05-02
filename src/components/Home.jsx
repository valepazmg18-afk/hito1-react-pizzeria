import CardPizza from "./CardPizzaTEMP";
import { Row } from "react-bootstrap";
import React from "react";

export default function Home() {
  const productos = [
    {
      title: "Pizza Napolitana",
      description:"La pizza napolitana, de masa tierna y delgada, se emplea en algunas zonas como sinónimo de pizza tonda.",
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      price: 5950,
      img: "https://cocina-casera.com/wp-content/uploads/2023/06/pizza-napolitana.jpeg",
    },
    {
      title: "Pizza Española",
      description:"La pizza Española es una preparación culinaria que consiste en un pan plano, elaborado con harina de trigo, levadura, agua, sal,aceite de oliva), con salsa de tomate, queso y sus ingredientes descritos. Se hornea a alta temperatura, en un horno de leña.",
      ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
      price: 7250,
      img: "https://tofuu.getjusto.com/orioneat-local/resized2/QyRsDfua3FTxx55HZ-2400-x.webp",
    },
    {
      title: "Pizza Salame",
      description:"La pizza Salame es una preparación que consiste en salsa de tomate, queso y salame de alta calidad, y se hornea tradicionalmente en un horno de leña.",
      ingredients: ["mozzarella", "tomates", "salame", "orégano"],
      price: 5990,
      img: "https://amadaterramia.com/wp-content/uploads/2025/04/pizza-salame-milan.jpg",
    },
    {
      title: "Pizza Cuatro Estaciones",
      description:"La pizza Cuatro Estaciones es una preparación elaborado con los mejores ingredientes de la zona, y horneada en horno de leña.",
      ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
      price: 9590,
      img: "https://recetinas.com/wp-content/uploads/2022/11/Pizza-cuatro-estaciones.jpg",
    },
    {
      title: "Pizza Bacon",
      description: "La pizza Bacon es una preparación culinaria elaborado con salsa de tomate natural, queso y el mejor ingrediente principal bacon, horneada en horno de leña.",
      ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
      price: 6450,
      img: "https://st2.depositphotos.com/4218696/7773/i/950/depositphotos_77736850-stock-photo-delicious-pizza-with-bacon-and.jpg",
    },
    {
      title: "Pizza Pollo Picante",
      description: "La pizza Pollo Picante es elaborado con el mejor pollo de la zona y especies naturales que le dan el sabor picante que esperas, horneado a alta temperatura en horno de leña.",
      ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
      price: 8500,
      img: "https://i.blogs.es/a07c70/pollo_curry/650_1200.jpg",
    },
  ]
  

  return (
    <>  
      <h2 className='text-center mt-5' style={{color: "#813d04", fontFamily: "Arial, sans-serif", fontWeight:"600", fontStyle:"italic"}}>Nuestras Pizzas</h2>
      <div className="container mt-5 mb-5 font-montserrat">
        <div className="container mt-5">
          <div className="row"> 
            {productos.map((producto, indice) =>
              <div className="col-md-4 mb-4" key={indice}>
                <CardPizza
                title={producto.title}
                description={producto.description}
                ingredients={producto.ingredients}
                price={producto.price}
                img={producto.img}
                />
              </div>)}
          </div>
        </div>
      </div>
    </>
  );
};

    
    