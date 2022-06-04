import { useState } from 'react'
import { Button, Container, Offcanvas } from 'react-bootstrap'

const SideMenu = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <Container>
            <Button variant="warning" onClick={handleShow}>
                Side Panel
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>Header</Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    )
}

export default SideMenu
