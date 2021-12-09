/* eslint-disable jsx-a11y/alt-text */
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
//import Buscar from "./Buscar"
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import search from "../../imgs/home/search.svg";
import "./style.scss";
import logo2 from "../../imgs/logo2.png";

const Header = () => {
  return (
    <section id="header">
      <Navbar bg="light" expand="lg">
        <Container fluid id="home">
          <Navbar.Brand className="nav-brand">
            <img src={logo2}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="basic-navbar-nav">
<<<<<<< HEAD
            <Nav className="align-items-center" style={{ width: "100%" }}>
=======
            
            <Nav style={{ width: "100%" }}>
>>>>>>> aeefd029f427dddda76894daecdd497e5f9c09c1
              <Form
                className="d-flex"
                style={{ width: "100%", maxWidth: "500px" }}
              >
                <FormControl
                  type="search"
                  placeholder="Insira o nome do produto"
                  className="me-2"
                  aria-label="Buscar"
                />
                <Button variant="outline-light">
                  <img className= "button" src={search} alt="search" />
                </Button>
              </Form>
            </Nav>

            <Nav className="d-flex align-items-center">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/produtos"}>Produtos</Nav.Link>
              <NavDropdown title="Categorias" className="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/categoria/suculentas"}>
                  Suculentas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/categoria/cactos"}>
                  Cactos
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/categoria/samambaias"}>
                  Samambaias
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/categoria/flores"}>
                  Flores
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/categoria/jardinagem"}>
                  Jardinagem
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{ whiteSpace: "nowrap" }} as={Link} to={"/sobreNos"}>
                Sobre nós
              </Nav.Link>
              <Nav.Link href="#footer">Contato</Nav.Link>
              <Nav.Link className="car" as={Link} to={"/carrinho"}>
                <CartIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
