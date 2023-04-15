import {Button} from "react-bootstrap";

export default function Banner() {
    return (
        <div className="my-5 text-white text-center fs-large">
            <p className="mb-0">ПРИ ПЕРВОМ ЗАКАЗЕ</p>
            <div className="p-4 d-inline-block text-orange bg-white rounded-4">
                ВТОРОЕ ГОРЯЧЕЕ БЛЮДО В ПОДАРОК
            </div>

            <div>
                <Button variant="orange" className="btn-extra-lg fs-6">Подробнее</Button>
            </div>
        </div>
    );
}