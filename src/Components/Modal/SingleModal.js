import { useState } from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
const ModalFilter = () => {
    const [show, setShow] = useState(null)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Container className="d-grid gap-2">
            <Button variant="primary" onClick={handleShow} size="lg">
                Launch filter modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ModalFilter
