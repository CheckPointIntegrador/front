/* eslint-disable jsx-a11y/alt-text */
import {Navbar, Nav, NavDropdown, Container, Form, FormControl, Button} from "react-bootstrap";
import CartIcon from "./CartIcon"
import search from "../../imgs/home/search.svg";
import "./style.scss";
import logo2 from '../../imgs/logo2.png'

const Header = () => {
  return (
   <section id="header">
    <Navbar bg="light" expand="lg">
      <Container fluid id="container">
        <Navbar.Brand className="nav-brand"><img src={logo2}></img></Navbar.Brand>
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
            <Nav.Link href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/produtos"}>Produtos</Nav.Link>
            <NavDropdown title= "Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href={"/categoria/suculentas"}>Suculentas</NavDropdown.Item>
              <NavDropdown.Item href={"/categoria/cactos"}>Cactos</NavDropdown.Item>
              <NavDropdown.Item href={"/categoria/samambaias"}>Samambaias</NavDropdown.Item>
              <NavDropdown.Item href={"/categoria/flores"}>Flores</NavDropdown.Item>
              <NavDropdown.Item href={"/categoria/jardinagem"}>Jardinagem</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={"/sobreNos"}>Sobre nós</Nav.Link>
            <Nav.Link href="#footer">Contato</Nav.Link>
            <Nav.Link href={"/carrinho"}><CartIcon/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
};

export default Header;
