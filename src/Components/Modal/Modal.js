//TO DO - Add submit functionality with Axios
import React, { useState } from 'react'
import { Button, Container, Modal, Form, Col, Row } from 'react-bootstrap'

const ModalPages = (props) => {
    const [show, setShow] = useState(null)
    const [modalState, setModalState] = useState(null)
    const [state, setState] = useState({ unidadeTempo: 'Minutos' })

    function handleInputChange(event) {
        const target = event?.target
        const value =
            target?.type === 'checkbox' ? target.checked : target.value
        const name = target?.name

        state[name] = value
        setState(state)
    }

    const handleClose = () => [setModalState(null), setShow(false)]
    const handleShow = () => [setShow(true), setModalState(1)]
    const nextPage = () => setModalState(2)
    const lastPage = () => setModalState(1)
    return (
        <Container className="d-grid gap-2">
            <Button variant="primary" onClick={handleShow} size="lg">
                Launch add modal
            </Button>
            {modalState === 1 ? (
                <Modal show={show} onHide={handleClose} fullscreen={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Informações gerais</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col md={5}>
                                    <Form.Group>
                                        <Form.Label>Nome da Receita</Form.Label>
                                        <Form.Control
                                            onChange={handleInputChange}
                                            name="nomeReceita"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>
                                            Tempo de preparo
                                        </Form.Label>
                                        <Form.Control
                                            onChange={handleInputChange}
                                            name="tempoPreparo"
                                            type="number"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>
                                            Unidade de tempo
                                        </Form.Label>
                                        <Form.Select
                                            onChange={handleInputChange}
                                            name="unidadeTempo"
                                        >
                                            <option>Minutos</option>
                                            <option>Horas</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group>
                                        <Form.Label>Porções</Form.Label>
                                        <Form.Control
                                            name="porcoes"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col md={5}>
                                    <Form.Group>
                                        <Form.Label>Categoria</Form.Label>
                                        <Form.Control
                                            name="categoria"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={1}></Col>
                                <Col md={5}>
                                    <Form.Group>
                                        <Form.Label>
                                            Adicione uma imagem
                                        </Form.Label>
                                        <input
                                            name="imagem"
                                            className="form-control"
                                            type="file"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-6 mt-5">
                                    <Form.Group>
                                        <Form.Label>Modo de preparo</Form.Label>
                                        <textarea
                                            onChange={handleInputChange}
                                            name="modoPreparo"
                                            className="form-control"
                                        ></textarea>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Col>
                            <p>
                                * A próxima página terá campos específicos para
                                os ingredientes desta receita
                            </p>
                        </Col>
                        <Col></Col>
                        <Col className="text-end">
                            <Button variant="primary" onClick={nextPage}>
                                Next
                            </Button>
                        </Col>
                    </Modal.Footer>
                </Modal>
            ) : (
                <Modal show={show} onHide={handleClose} fullscreen={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingredientes associados</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Ingredientes</Form.Label>
                                    <Form.Control
                                        name="ingrediente"
                                        type="text"
                                        onChange={handleInputChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Quantidade</Form.Label>
                                        <Form.Control
                                            name="quantidade"
                                            type="number"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Unidade</Form.Label>
                                        <Form.Control
                                            name="unidade"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={lastPage}>
                            Back
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    )
}

export default ModalPages
