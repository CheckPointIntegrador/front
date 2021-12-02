import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import carrinho from '../../imgs/home/cart4.svg';

const Header = () => {

return (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Casa das Plantinhas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Produtos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Suculentas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Cactos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Samambaias</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Flores</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Jardinagem</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#aboutUs">Sobre nós</Nav.Link>
        <Nav.Link href="#carrinho"><img
        src={carrinho}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}
  
export default Header;