import React from "react";
import CardPizza from "./CardPizza";
import { useState } from "react";

export default function Cart() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      title: "Pizza Napolitana",
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://cocina-casera.com/wp-content/uploads/2023/06/pizza-napolitana.jpeg",
      price: 5950,
      cantidad: 1,
    },
    {
      id: 2,
      title: "Pizza Española",
      ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
      img: "https://tofuu.getjusto.com/orioneat-local/resized2/QyRsDfua3FTxx55HZ-2400-x.webp",
      price: 7250,
      cantidad: 1,
    },
    {
      id: 3,
      title: "Pizza Salame",
      ingredients: ["mozzarella", "tomates", "salame", "orégano"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaAtmi7cGQhYL8xYXCvQhTEjAsgsNkdSU80g&s",
      price: 5990,
      cantidad: 1,
    },
    {
      id: 4,
      title: "Pizza Cuatro Estaciones",
      ingredients: ["mozzarella", "salame", "aceitunas", "champiñon", "jamón"],
      img: "https://recetinas.com/wp-content/uploads/2022/11/Pizza-cuatro-estaciones.jpg",
      price: 9590,
      cantidad: 1,
    },
    {
      id: 5,
      title: "Pizza Bacon",
      ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRUJFff5cEhq2lzwNC0SCWpDgom72x6u7sQ&s",
      price: 6450,
      cantidad: 1,
    },
    {
      id: 6,
      title: "Pizza Pollo Picante",
      ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
      img: "https://i.blogs.es/a07c70/pollo_curry/650_1200.jpg",
      price: 8500,
      cantidad: 1,
    }
  ]);

  const modificarCantidad = (operacion, id)=>{
    console.log("Vamos a hacer una operación de ", operacion, " al producto con id ", id)

    let productoModificar = productos.find(p => p.id === id)
    console.log("Producto a modificar: ", productoModificar)

    if(operacion === "suma"){
      productoModificar.cantidad = productoModificar.cantidad + 1
    }
    if(operacion === "resta" && productoModificar.cantidad > 1){
      productoModificar.cantidad = productoModificar.cantidad - 1
    }

    let productosActualizados = productos.map(p => p)

    setProductos(productosActualizados)

  }


  return (
    <>
      <div className="container">
        <h1>Carrito de Compras</h1>
        <div className="row">
          <div className="col-md-6">
            <ul className="">
              {productos.map((p, i) => (
                <li
                  key={i}
                  className="border rounded mt-2 p-3"
                  style={{ listStyle: "none" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img style={{ width: "60px" }} src={p.img} alt="" />{" "}
                      {p.title}
                    </div>
                    <div>
                      <button className="btn btn-sm btn-dark"
                      onClick={()=> modificarCantidad("suma", p.id)}
                      >+</button>{" "}
                      {p.cantidad}
                      <button className="btn btn-sm btn-dark ms-1"
                      onClick={()=> modificarCantidad("resta", p.id)}
                      >
                        -
                      </button >
                      <p>Total: ${(p.price * p.cantidad).toLocaleString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 border rounded p-3" >
            <h3>Resumen de Compra</h3>
            <p>Total a Pagar: ${productos.reduce((total, producto) => total + (producto.price * producto.cantidad), 0).toLocaleString()}</p>
              <button className="btn btn-success">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </>
  );

}
