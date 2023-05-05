import {Alert, Button, ButtonGroup, Dropdown, FloatingLabel, Form, Modal, Spinner} from "react-bootstrap";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {authStateSelector, dismissErrorMessage, login, logout} from "../../store/authSlice";
import {useNavigate} from "react-router-dom";

export default function UserNavbarButton() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { register, handleSubmit } = useForm();
    const { isLoading, currentUser, loginErrorMessage } = useSelector(authStateSelector)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => dispatch(login(data));
    const handleAlertClose = () => dispatch(dismissErrorMessage());
    const handleClose = () => {
        setShowLoginModal(false);
        handleAlertClose();
    };
    const handleShow = () => setShowLoginModal(true);
    const handleLogout = (event) => {
        event.preventDefault();
        handleClose();
        dispatch(logout());
        navigate('/');
    };

    return (
        <>
            {currentUser && (
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle variant="link" className="btn-p0 fs-large text-white">
                        <span className="bi-person-fill fs-large"></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={() => navigate("/orders")}>Заказы</Dropdown.Item>
                        {currentUser?.role === 'ADMIN'
                            && <Dropdown.Item as="button" onClick={() => navigate("/product")}>Блюда</Dropdown.Item>}
                        <Dropdown.Divider/>
                        <Dropdown.Item as="button" onClick={handleLogout}>Выйти</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )}
            {!currentUser && (
                <Button variant="link" className="btn-p0" onClick={handleShow}>
                    <span className="bi-person fs-large text-white"></span>
                </Button>
            )}

            <Modal show={showLoginModal && !currentUser} onHide={handleClose}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <h1 className="modal-title fs-5">Логин</h1>
                    </Modal.Header>
                    <Modal.Body>
                        {loginErrorMessage && (
                            <Alert variant="danger" onClose={handleAlertClose} dismissible>
                                {loginErrorMessage}
                            </Alert>
                        )}
                        <FloatingLabel controlId="login-email" label="Email" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" className="form-orange"
                                          {...register("email")} />
                        </FloatingLabel>
                        <FloatingLabel controlId="login-password" label="Пароль">
                            <Form.Control type="password" placeholder="..." className="form-orange"
                                          {...register("password")}/>
                        </FloatingLabel>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                        <Button variant="orange" type="submit" disabled={isLoading}>
                            {isLoading ? <Spinner animation="border" size="sm" /> : "Войти"}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
