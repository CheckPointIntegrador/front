import {Navbar, Nav, NavDropdown, Container, Form, FormControl, Button} from "react-bootstrap";
import carrinho from "../../imgs/home/cart4.svg";
import search from "../../imgs/home/search.svg";
import "./style.scss";

const Header = () => {
  return (
   
    <Navbar bg="light" expand="lg">
      <Container fluid id="container">
        <Navbar.Brand className="nav-brand">Casa das Plantinhas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className= "me-auto">
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Buscar"/>
              <Button variant="outline-success">
                <img src={search} alt="search" />
              </Button>
            </Form>
          </Nav>

          <Nav className="d-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title= "Produto" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Suculentas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cactos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Samambaias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Flores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Jardinagem</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#aboutUs">Sobre nós</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href="#carrinho"><img src={carrinho} alt="carrinho de compras" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header;
