import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers, getUsers} from "./store/userSlice";

function App() {
    const [count, setCount] = useState(0);
    const {state, data} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (state === 'loading') {
            dispatch(getUsers())
        }
    }, [state, dispatch]);

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <div className="card">
                {state === 'loading' && <p>loading data</p>}
                {state === 'loaded' && <>
                    <button onClick={() => dispatch(fetchUsers())}>
                        click here to refresh users
                    </button>
                    {data.map(({id, email, role}) => {
                        return (<p key={id}>Id: {id}, Email: {email}, Role: {role}</p>)
                    })}
                </>}
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
