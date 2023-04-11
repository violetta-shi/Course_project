import {createBrowserRouter, createRoutesFromElements, Route, Router} from "react-router-dom";
// import AppOld from "./AppOld";
// import Home from "./components/Home";
// import About from "./components/About";
// import Login from "./components/Login";
// import ErrorPage from "./components/ErrorPage";
import App from "./App";

export const router = createBrowserRouter(createRoutesFromElements(
    // <Route element={<AppOld/>}>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/about' element={<About/>}/>
    //     <Route path='/login' element={<Login/>}/>
    //     <Route path='/*' element={<ErrorPage/>}/>
    // </Route>
    <Route element={<App/>}>
        <Route path="/"/>
    </Route>
));