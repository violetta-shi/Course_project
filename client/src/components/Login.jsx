import {useCallback} from "react";
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/authSlice";
import {useForm} from "react-hook-form";

export default function Login() {
    const { currentUser, loginErrorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = useCallback((body) => {
        dispatch(login(body));
    }, []);

    if (currentUser) {
        return <Navigate to='/'/>
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email: <input {...register("email")}/>
                </label>
                <label>
                    Password: <input type="password" {...register("password")}/>
                </label>
                <button type="submit">Log in</button>
                {loginErrorMessage && <p style={{'color': 'red'}}>{loginErrorMessage}</p>}
            </form>
        </>
    );
}