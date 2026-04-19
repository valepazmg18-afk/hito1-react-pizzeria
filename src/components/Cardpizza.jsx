import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function PizzaCard(props) {
  return (
      <Card
        style={{ width: "20rem", height: "500px", gap: "10px" }}
        className="shadow"
      >
        <Card.Img
          variant="top"
          src={props.img}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.ingredients.join(", ")}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${props.price.toLocaleString()}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="btn btn-light">Ver más 👀</button>
          <button className="btn btn-dark">Añadir 🛒</button>
        </Card.Body>
      </Card>
  );
}

export default PizzaCard;
