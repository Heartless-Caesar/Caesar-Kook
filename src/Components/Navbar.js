import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap'
import SideMenu from './Offcanvas/SidePanel'
const NavbarComponent = () => {
    return (
        <Navbar expand="sm" bg="dark" variant="dark">
            <Container fluid>
                <Row>
                    <Col>
                        <SideMenu />
                    </Col>
                    <Col>
                        <Navbar.Brand>Store Name Here</Navbar.Brand>
                    </Col>

                    <Col>
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link href="#Home">Home</Nav.Link>
                                <Nav.Link href="#Catalog">Catalog</Nav.Link>
                                <Nav.Link href="#About">About</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
