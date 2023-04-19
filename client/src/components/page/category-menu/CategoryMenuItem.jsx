import {Button, ButtonGroup, Card, Col, Stack} from "react-bootstrap";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItemToBucket, bucketStateSelector, removeItemFromBucket} from "../../../store/bucketSlice";

export default function CategoryMenuItem({ products }) {
    const [selectedProduct, setSelectedProduct] = useState(products[products.length - 1]);
    const { items } = useSelector(bucketStateSelector);
    const dispatch = useDispatch();

    const productInBucket = items[selectedProduct.id];

    const handleAddToBucket = () => dispatch(addItemToBucket(selectedProduct));
    const handleRemoveFromBucket = () => dispatch(removeItemFromBucket(selectedProduct));

    return (
        <Col>
            <Card className="border-0 h-100">
                <div className="overflow-hidden">
                    <Card.Img variant="top" className="scale-transition" src={selectedProduct.image_url}/>
                </div>
                <Card.Body className="card-y-padding">
                    <Card.Title as="h5" className="fs-4 my-1">{selectedProduct.name}</Card.Title>
                    {products.length > 1 && (
                        <div>
                            <Card.Text className="mb-0">Размер</Card.Text>
                            <ButtonGroup className="w-100 mb-3">
                                {products.map(product => (
                                    <Button variant="outline-orange" onClick={() => setSelectedProduct(product)}
                                            active={product.id === selectedProduct.id} key={product.id}>
                                        {product.size}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </div>
                    )}
                </Card.Body>
                <Stack direction="horizontal" className="justify-content-between">
                    <p className="fs-5">{selectedProduct.price} руб.</p>
                    <p className="text-light-dark">{selectedProduct.weight}гр.</p>
                </Stack>
                {!productInBucket && (
                    <Button variant="outline-orange" className="w-100" onClick={handleAddToBucket}>
                        <span className="bi-bucket"></span> В корзину
                    </Button>
                )}
                {productInBucket && (
                    <Stack direction="horizontal" className="justify-content-between">
                        <p className="mb-0 text-orange">В корзине</p>
                        <div>
                            <Button variant="gray-orange" onClick={handleRemoveFromBucket}>
                                <i className="bi-dash-lg"></i>
                            </Button>
                            <span className="mx-2">{productInBucket.amount}</span>
                            <Button variant="gray-orange" onClick={handleAddToBucket}>
                                <i className="bi-plus-lg"></i>
                            </Button>
                        </div>
                    </Stack>
                )}
            </Card>
        </Col>
    )
}
