import {createBrowserRouter, createRoutesFromElements, Route, Router} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
    </Route>
));