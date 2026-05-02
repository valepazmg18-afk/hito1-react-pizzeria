import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarComponent() {
        const total = 43730;
        const token = false;
    return (
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        
        <Container fluid>
          <Navbar.Brand href="#home">🍕 Home</Navbar.Brand>
          <Nav className="me-auto gap-3">
            {token == false ? (
              <>
                <Nav.Link href="#login" style={{border:"1px solid white", borderRadius:"5px"}}>🔐Login</Nav.Link>
                <Nav.Link href="#register" style={{border:"1px solid white", borderRadius:"5px"}}>🔐Register</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#profile" style={{border:"1px solid white", borderRadius:"5px"}}>🔒Profile</Nav.Link>
                <Nav.Link href="#logout" style={{border:"1px solid white", borderRadius:"5px"}}>🔒Logout</Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#total" style={{border:"1px solid white", borderRadius:"5px"}}>🛒Total: ${total.toLocaleString('es-CL')}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
};

export default NavbarComponent;