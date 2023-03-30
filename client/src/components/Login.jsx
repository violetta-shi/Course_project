import {useCallback, useRef } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/authSlice";

export default function Login() {
    const { currentUser, loginErrorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = useCallback((event) => {
        event.preventDefault();

        const body = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        }

        dispatch(login(body));
    }, []);

    if (currentUser) {
        return <Navigate to='/'/>
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        ref={emailRef}
                    />
                </label>
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        ref={passwordRef}
                    />
                </label>
                <button type="submit">Log in</button>
                {loginErrorMessage && <p style={{'color': 'red'}}>{loginErrorMessage}</p>}
            </form>
        </>
    );
}