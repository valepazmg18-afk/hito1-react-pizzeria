import { useEffect, useState } from 'react';

export default function Pizza() {

    const [pizza, setPizza] = useState(null);
    let apiUrl = 'http://localhost:5000/api/pizzas';

  const getPizza = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setPizza(data[0]);
  };

  useEffect(() => {
    getPizza();
  }, []);


return (
    <>
        <div className="pizza-container my-5 py-5 ">
        <h2 className="text-center mb-4 shadow ">Nuestras Pizzas</h2> 
            <div className="row g-0 shadow mx-auto d-flex justify-content-center" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", width: "20rem", height:"650px" }}>
                {pizza && (
                <div className="col-md-4 mx-auto d-flex justify-content-center flex-column flex-grow-1 gap-3" key={pizza.id}>
                    <img src={pizza.img} alt={pizza.name} className="card-img-top" style={{ height: "250px", width: "330px", objectFit: "cover",}} onError={(e) => { e.currentTarget.onerror=null; e.currentTarget.src="https://www.greatitalianfoodtrade.it/wp-content/uploads/2015/01/Pizza-napoletana-pf-grande.jpg"}}/>
                    <p className="card-text" style={{ flexGrow: 1, minHeight: "80px", color: "#555", fontSize: "16px",}}>
                        {pizza.desc}
                    </p>
                    <p className="card-text" style={{flexGrow: 1, fontSize: "16px", color: "#555",}}>
                        <small className="text-muted">Ingredientes: {pizza.ingredients?.join(" , ")}</small>
                    </p>
                    <p>$ {pizza.price.toLocaleString("es-CL")}</p>
                    <button className="btn btn-dark">Comprar</button>
                </div>
                )}
            </div>
        </div>
    </>
  );
}
