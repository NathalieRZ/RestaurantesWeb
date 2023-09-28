
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Navigation() {
    return (
        <div style={{background: '#81DAF5'}}>
        <Navbar expand="lg" className="bg-body-tertiary" class="navbar navbar-dark bg-dark">
            <Container>
                <Navbar.Brand href="/">Restaurantes</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/registrarse">Registrarse</Nav.Link>
                        <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}