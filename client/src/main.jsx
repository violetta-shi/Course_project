import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {store} from './store'
import {Provider} from 'react-redux'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);
