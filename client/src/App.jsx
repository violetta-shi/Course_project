import {Outlet} from "react-router-dom";
import {Container, Spinner} from "react-bootstrap";
import AppHeader from "./components/navbar/AppHeader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSelf, authStateSelector} from "./store/authSlice";

export default function App() {
    const { currentUser } = useSelector(authStateSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSelf());
    }, [currentUser]);

    return (
        currentUser === undefined
            ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="grow" variant="light"/>
                </div>
            )
            : (
                <Container>
                    <AppHeader/>
                    <Outlet/>
                </Container>
            )
    )
}