/* eslint-disable jsx-a11y/alt-text */
import {
  Navbar,
  Nav,
  NavDropdown,
  Container
} from "react-bootstrap";
import SearchBar from "./SearchBar"
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";
import "./style.scss";
import logo2 from "../../imgs/logo2.png";

const Header = () => {
  return (
    <section id="header">
      <Navbar expand="lg">
        <Container fluid id="home">
          <Navbar.Brand className="nav-brand">
            <a href="/">
              <img src={logo2}></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="basic-navbar-nav">
            <SearchBar />

            <Nav className="d-flex align-items-center">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/produtos"}>
                Produtos
              </Nav.Link>
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
              <Nav.Link
                style={{ whiteSpace: "nowrap" }}
                as={Link}
                to={"/sobreNos"}
              >
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
