import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function CategoryGridItem({ id, name, imageUrl }) {
    return (
        <Col>
            <Card className="border-0 rounded-4 overflow-hidden">
                <Card.Img src={imageUrl}/>
                <Card.ImgOverlay className="card-no-padding text-white d-flex align-items-end">
                    <h3 className="card-title m-0 p-3 w-100 bg-gradient">{name}</h3>
                </Card.ImgOverlay>
                <Link to={`/menu/${id}`} className="stretched-link"/>
            </Card>
        </Col>
    );
}