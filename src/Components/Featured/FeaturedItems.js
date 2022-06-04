import { Card, Container, Row, Col } from 'react-bootstrap'
import './Featureditems.css'
const FeaturedItems = () => {
    return (
        <Container fluid="fluid" className="mt-4">
            <Card>
                <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/10334838/pexels-photo-10334838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="text-start featured-img"
                />
                <Card.Body>
                    <Card.Title>Card title here</Card.Title>
                    <Card.Text>
                        <p>Placeholder text here</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>Card footer here</Card.Footer>
            </Card>
        </Container>
    )
}

export default FeaturedItems
