import '../App.css';
import '../style.css';
import * as ReactBootstrap from 'react-bootstrap';

function Nav() {

  return (
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <ReactBootstrap.Navbar.Brand href="#">My Space</ReactBootstrap.Navbar.Brand>
      <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootstrap.Nav className="mr-auto">
          <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="/about">About</ReactBootstrap.Nav.Link>

          <ReactBootstrap.NavDropdown title="Access to" id="collasible-nav-dropdown">
            <ReactBootstrap.NavDropdown.Item href="https://drive.google.com/file/d/1md2vH-2hRcQrXcrH9jEG8EIr0DxA8UKA/view?usp=sharing" rel="noreferrer" target="_blank">My Resume</ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="https://www.linkedin.com/in/toogii-dashdavaa-37851442/" rel="noreferrer" target="_blank">My LinkedIn</ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Item href="https://github.com/Toogii2019" rel="noreferrer" target="_blank">My Github</ReactBootstrap.NavDropdown.Item>
            <ReactBootstrap.NavDropdown.Divider />
            <ReactBootstrap.NavDropdown.Item href="/portfolio">My Portfolio</ReactBootstrap.NavDropdown.Item>
          </ReactBootstrap.NavDropdown>
        </ReactBootstrap.Nav>

      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  );
}

export default Nav;
