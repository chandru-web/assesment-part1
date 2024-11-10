import {Container, Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <Navbar expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand as={Link} to="/" className="navbar-brand">
        BriSphere
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/discover" className="nav-link">
            Discover
          </Nav.Link>
          <Nav.Link as={Link} to="/services" className="nav-link">
            Services
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
