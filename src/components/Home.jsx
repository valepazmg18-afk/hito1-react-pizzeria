import PizzaCard from './Cardpizza';
import { Container } from 'react-bootstrap';
import Header from './Header';

function Home() {
  return (
    <div>
        <Header />
        <h2 className='text-center mt-5' style={{color: "#813d04", fontFamily: "Arial, sans-serif", fontWeight:"600", fontStyle:"italic"}}>Nuestras Pizzas</h2>
        <div className="d-flex justify-content-center gap-5 mt-4 flex-wrap" style={{border: "2px solid #994703a4", padding: "30px", width: "80%", margin:"40px auto"}}>
            <PizzaCard 
            name="Napolitana" 
            price={5950} 
            ingredients={["Mozzarella", "tomates", "jamón", "orégano"]} 
            img="https://imag.bonviveur.com/pizza-napolitana.jpg"
            />
            <PizzaCard 
            name="Española"
            price={6950} ingredients={["Mozzarella", "gorgonzola", "parmesano", "provolone"]} 
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYBqfShRwcMInoVVvPu4D_I8y-YtP9an2bw&s"
            />
            <PizzaCard 
            name="Pepperoni" 
            price={6950} 
            ingredients={["Mozzarella", "pepperoni", "orégano"]} 
            img="https://tofuu.getjusto.com/orioneat-local/resized2/WvGFKgLkoNo4KAMzq-300-x.webp"
            />
        </div>
    </div>
  );
}

export default Home;