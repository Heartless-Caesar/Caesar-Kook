import { Card, NavLink } from 'react-bootstrap'

const CardComponent = () => {
    return (
        <Card className="p-1">
            <a href="#Categoria">
                <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/10334838/pexels-photo-10334838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    className="text-start featured-img"
                />

                <Card.ImgOverlay></Card.ImgOverlay>
            </a>
        </Card>
    )
}

export default CardComponent
