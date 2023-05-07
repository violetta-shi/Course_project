import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import AppMain from "./components/page/AppMain";
import AppMenu from "./components/page/AppMenu";
import AppCategoryMenu from "./components/page/AppCategoryMenu";
import ErrorPage from "./components/ErrorPage";
import AppOrder from "./components/page/AppOrder";
import AppProduct from "./components/page/AppProduct";
import AppCategory from "./components/page/AppCategory";
import AppAdminDashboard from "./components/page/dashboard/AppAdminDashboard";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<App/>}>
        <Route path="/" element={<AppMain/>}/>
        <Route path="/menu" element={<AppMenu/>}/>
        <Route path="/menu/:id" element={<AppCategoryMenu/>}/>
        <Route path="/order" element={<AppOrder/>}/>
        <Route path="/product" element={<AppProduct/>}/>
        <Route path="/category" element={<AppCategory/>}/>
        <Route path="/dashboard" element={<AppAdminDashboard/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
    </Route>
));
