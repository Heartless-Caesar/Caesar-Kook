import CardComponent from './Card'
import { Col, Row, Container } from 'react-bootstrap'
import ModalPages from './Modal/Modal'
import ModalFilter from './Modal/SingleModal'
import FeaturedItems from './Featured/FeaturedItems'

const Body = () => {
    return (
        <Container className="mt-5 mb-5">
            <Container className="d-grid gap-2">
                <Row className="mb-3">
                    <Col>
                        <ModalPages />
                    </Col>
                    <Col>
                        <ModalFilter />
                    </Col>
                </Row>
            </Container>
            <Row className="mt-5">
                <Container className="text-center h2">Categorias</Container>
            </Row>
            <Row className="mt-5">
                <Col>
                    <CardComponent />
                </Col>
                <Col>
                    <CardComponent />
                </Col>
                <Col>
                    <CardComponent />
                </Col>
                <Col>
                    <CardComponent />
                </Col>
            </Row>
            <Row className="mt-5">
                <Container className="text-center h2">Destaques</Container>
            </Row>
            <Row>
                <Col>
                    <FeaturedItems />
                </Col>
                <Col>
                    <FeaturedItems />
                </Col>
                <Col>
                    <FeaturedItems />
                </Col>
                <Col>
                    <FeaturedItems />
                </Col>
            </Row>
        </Container>
    )
}

export default Body
